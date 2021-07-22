import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LibrarianSideBar from '../../components/LibrarianSideBar/LibrarianSideBar'
import TopBar from '../../components/TopBar/TopBar'
import MyRequest from '../librarian/MyRequest'
import Book from './Book'
import DashBoard from './DashBoard'
import ManageLibrary from './ManageLibrary'
import UserRequest from './UserRequest'
import AuthorList from './ManageAuthor'
import CategoryList from './ManageCategory'
import PublisherList from './ManagePublisher'
import LocationList from './ManageLocation'
import BookshelfList from './ManageBookshelf'
import DepartmentList from './ManageDepartment'

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
            <Route path="/manageauthor" component={AuthorList}/>
            <Route path="/managecategory" component={CategoryList}/>
            <Route path="/managepublisher" component={PublisherList}/>
            <Route path="/managelocation" component={LocationList}/>
            <Route path="/managebookshelf" component={BookshelfList}/>
            <Route path="/managedepartment" component={DepartmentList}/>
            </BrowserRouter>
        </div>
    )
}

export default LibrarianMainPage
