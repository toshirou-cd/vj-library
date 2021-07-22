import  {Icon}   from 'semantic-ui-react'
const LibSideBarData = [
    {
        title : "Dash Board",
        icon  : <Icon name='dashboard' size='large' />,
        path  : "/dashboard"
    },
    {
        title : "User's Request",
        icon  : <Icon name='check square' size='large' />,
        path  : "/userrequest"
    },
    {
        title : "Book",
        icon  : <Icon name='book' size='large'/>,
        path  : "/mybook"
    },
    {
        title : "My Request",
        icon  : <Icon name='tasks' size='large'/>,
        path  : "/myrequest"
    },
    {
        title : "Manage Library",
        icon  : <Icon name='bars' size='large'/>,
        path  : "/managelibrary"
    },
    {
        title : "Authors",
        icon  : <Icon name='pencil' size='large' />,
        path  : "/manageauthor"
    },
    {
        title : "Categories",
        icon  : <Icon name='qrcode' size='large' />,
        path  : "/managecategory"
    },
    {
        title : "Publishers",
        icon  : <Icon name='print' size='large'/>,
        path  : "/managepublisher"
    },
    {
        title : "Locations",
        icon  : <Icon name='point' size='large'/>,
        path  : "/managelocation"
    },
    {
        title : "Bookshelves",
        icon  : <Icon name='server' size='large'/>,
        path  : "/managebookshelf"
    },
    {
        title : "Departments",
        icon  : <Icon name='building' size='large'/>,
        path  : "/managedepartment"
    },
]
export default LibSideBarData