import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LibrarianSideBar from '../../components/LibrarianSideBar/LibrarianSideBar'
import TopBar from '../../components/TopBar/TopBar'
import MyRequest from '../librarian/MyRequest'
import Book from './Book'
import DashBoard from './DashBoard'
import ManageLibrary from './ManageLibrary'
import UserRequest from './UserRequest'

const LibrarianMainPage:React.FC = () => {
    return (
        <div>
            <TopBar/>
            <BrowserRouter>
                <LibrarianSideBar/>
            <Route path="/dashboard" component={DashBoard}/>
            <Route path="/userrequest" component={UserRequest}/>
            <Route path="/mybook" component={Book}/>
            <Route path="/myrequest" component={MyRequest}/>
            <Route path="/managelibrary" component={ManageLibrary}/>
            </BrowserRouter>
        </div>
    )
}

export default LibrarianMainPage
