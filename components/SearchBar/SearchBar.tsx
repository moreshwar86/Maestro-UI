import React, { useEffect, useState } from "react";
import "./SearchBar.scss";
import { useDispatch, useSelector } from "react-redux";
import ArrowUpWithCircle from "../../assets/icons/ArrowUpWithCircle";
import { hideRightSidebar } from "../../store/searchbar";
import { fetchQuery, fetchSuggestions } from "../../store/searchbar/api";
import Loader from "../Loader/Loader";
import RequestPrForm from "../RequestWorkflow/RequestPrForm/RequestPrForm";

interface SearchBarProps {
  onSearch?: (searchTerm: string) => void;
}
interface ChatData {
  id: number;
  question: string;
  answerDetails: any;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [chatData, setChatData] = useState<ChatData[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  const searchState = useSelector((state: any) => state?.searchbar);
  const { rightSidebarHidden, chatDetails, loading, suggestionsList } =
    searchState;
  console.log("loading", loading);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(hideRightSidebar(value || chatData?.length > 0 ? true : false));
    if (onSearch) {
      onSearch(value);
    }
  };
  console.log(rightSidebarHidden);
  const handleClick = async () => {
    if (searchTerm) {
      // Dispatch the fetchQuery action
      setChatData([
        ...chatData,
        {
          id: chatData.length + 1,
          question: searchTerm,
          answerDetails: {},
        },
      ]);
      await dispatch(
        fetchQuery({
          query: searchTerm,
          option: {
            answer_format: "html",
          },
        }) as any
      );
      setSearchTerm("");
    }
  };

  useEffect(() => {
    if (chatDetails?.entry_id) {
      if (chatData?.length > 0) {
        setChatData(
          chatData.map((item: any) => {
            if (item.id === chatData.length) {
              return {
                ...item,
                answerDetails: chatDetails,
              };
            }
            return item;
          })
        );
      }
      setSearchTerm("");
      setSelectedSuggestion("");
      dispatch(hideRightSidebar(true));
    }
  }, [chatDetails?.entry_id]);

  // console.log("chatData", chatData);

  useEffect(() => {
    if (selectedSuggestion) {
      setChatData([]);
      dispatch(hideRightSidebar(true));
    }
  }, [selectedSuggestion]);

  const getSuggestions = async () => {
    await dispatch(fetchSuggestions() as any);
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div
      className={`search-bar-container ${
        (searchTerm || chatData?.length > 0 || selectedSuggestion) &&
        "search-bar-container__bottom"
      }
          ${rightSidebarHidden && "expanded-search-bar"}
      }`}
    >
      {!searchTerm && !(chatData?.length > 0) && !selectedSuggestion && (
        <p className="search-bar__title">Hi User! Welcome to Maestro</p>
      )}
      <div className={"chat-main-container"}>
        {chatData &&
          chatData?.map((chat: any, index: number) => (
            <div key={index} className="chat-container">
              <div key={index} className="chat-container__question">
                <p className="helper-text">You</p>
                <p className="text">{chat.question}</p>
              </div>
              {loading ? (
                <div className="chat-container__answer">
                  <p className="helper-text">Assistance</p>
                  <div className="text-container">
                    <Loader />
                  </div>
                </div>
              ) : (
                <div className="chat-container__answer">
                  <p className="helper-text">Assistance</p>
                  <div className="text-container">
                    <div className="icon">M</div>
                    <p
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: chat.answerDetails.answer,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        {selectedSuggestion === "Raise PR" && (
          <div className="chat-container">
            <RequestPrForm />
          </div>
        )}
      </div>
      <div className="search-bar">
        <ArrowUpWithCircle
          className={`search-bar__icon`}
          fill={searchTerm ? "white" : "lightgray"}
          // ${isBottom ? "rotated" : ""}
          onClick={handleClick}
          style={{
            cursor: searchTerm ? "pointer" : "not-allowed",
          }}
        />
        <input
          type="text"
          placeholder="Message Maestro"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar__input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
        />
      </div>
      {!searchTerm && !(chatData?.length > 0) && !selectedSuggestion && (
        <div className="search-bar-container__suggestion">
          {suggestionsList?.map((suggestion: any, index: number) => (
            <div
              key={index}
              className="search-bar-container__suggestion__item"
              onClick={() => setSelectedSuggestion(suggestion?.suggestionText)}
            >
              {suggestion?.suggestionText}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
