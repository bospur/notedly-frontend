import React, { useState } from "react";
import cl from "./Note.module.css";
import { convertDate } from "../../../utils.js/util";
import NoteFavoriteIcon from "../../../ui/icons/note-favorite-icon";
import SettingIcon from "../../../ui/icons/setting-icon";
import { Link } from "react-router-dom";

const Note = ({ note }) => {
  const [isSetting, setIsSetting] = useState(false);
  const date = convertDate(note.createdAt);

  const onSettingIconClick = () => {
    setIsSetting(!isSetting);
  };

  const isActiveStyle = isSetting ? "auto" : "0";
  const isActiveVisible = isSetting ? "visible" : "hidden";

  const onEditClick = () => {
    console.log("click edit");
  };
  const onDetailClick = () => {
    console.log("detail click");
  };
  const onDeleteClick = () => {
    console.log("delete click");
  };

  return (
    <li className={cl.noteItem}>
      <div className={cl.noteHeader}>
        <img
          src={note.author.avatar}
          alt={`${note.author.username} avatar`}
          className={cl.noteAvatar}
        />
        <div>
          <Link to={`note/${note.id}`} className={cl.noteUser}>
            {note.author.username}
          </Link>
          <p className={cl.date}>{date}</p>
        </div>
        <div className={cl.favorites}>
          <NoteFavoriteIcon />
          {note.favotiteCount ? <p>{note.favotiteCount}</p> : ""}
        </div>
        <div className={cl.setting}>
          <SettingIcon onClick={onSettingIconClick} />
          {isSetting && (
            <div
              className={cl.settingMenu}
              style={{
                height: `${isActiveStyle}`,
                overflow: `${isActiveVisible}`,
              }}
            >
              <ul>
                <li
                  onClick={onEditClick}
                  style={{ color: "var(--edit-color-main)" }}
                >
                  Edit
                </li>
                <li onClick={onDetailClick}>
                  <Link to={`/note/${note.id}`}>Detail</Link>
                </li>
                <li
                  onClick={onDeleteClick}
                  style={{ color: "var(--delete-color-main)" }}
                >
                  Delete
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={cl.noteMain}>
        <p className={cl.noteContent}>{note.content}</p>
      </div>
    </li>
  );
};

export default Note;
