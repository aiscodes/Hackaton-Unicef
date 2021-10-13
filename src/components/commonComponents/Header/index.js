import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EqualizerSharpIcon from '@material-ui/icons/EqualizerSharp';
import QuestionAnswerSharpIcon from '@material-ui/icons/QuestionAnswerSharp';
import EventSharpIcon from '@material-ui/icons/EventSharp';
import PlaylistAddCheckSharpIcon from '@material-ui/icons/PlaylistAddCheckSharp';
import AssignmentIndSharpIcon from '@material-ui/icons/AssignmentIndSharp';
import './Header.css';
import { NavLink } from 'react-router-dom';
import LibraryAddCheckSharpIcon from '@material-ui/icons/LibraryAddCheckSharp';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
export default function Header() {
  return (
    <div className="header_container">
      <div className="header_first_line">
        <NavLink
          activeClassName="active_header_link"
          className="header_link"
          to={'/about'}
        >
          <div className="header_block">
            <LocalHospitalIcon className="header_icon" />
            <p className="header_text">О вакцинах</p>
          </div>
        </NavLink>
        <NavLink
          activeClassName="active_header_link"
          className="header_link"
          to={'/myths'}
        >
          <div className="header_block">
            <BookmarksIcon 
              className="header_icon" 
              activeClassName="active_header_link"
              to={'./myths'}
              />
            <p>Важная информация</p>
          </div>
        </NavLink>
        <NavLink
          activeClassName="active_header_link"
          className="header_link"
          to={'/statistics'}
        >
          <div className="header_block">
            <EqualizerSharpIcon className="header_icon" />
            <p>Статистика</p>
          </div>
        </NavLink>
        <NavLink
          activeClassName="active_header_link"
          className="header_link"
          to={'/testing'}
        >
          <div className="header_block">
            <PlaylistAddCheckSharpIcon className="header_icon" />
            <p>Тестирование</p>
          </div>
        </NavLink>
        <NavLink
          activeClassName="active_header_link"
          className="header_link"
          to={'/calendar'}
        >
          <div className="header_block">
            <EventSharpIcon className="header_icon" />
            <p>Онлайн запись</p>
          </div>
        </NavLink>
        <NavLink
          activeClassName="active_header_link"
          className="header_link"
          to={'/feedback'}
        >
          <div className="header_block">
            <LibraryAddCheckSharpIcon className="header_icon" />
            <p>Отзыв</p>
          </div>
        </NavLink>
        <NavLink
          activeClassName="active_header_link"
          className="header_link"
          to={'/my-card'}
        >
          <div className="header_block">
            <AssignmentIndSharpIcon className="header_icon" />
            <p>Моя карта</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
