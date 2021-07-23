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
        path  : "/managelibrary",

        subMenu : [
            {
                title : "Authors",
                icon  : <Icon name='pencil' size='large' />,
                path  : "/managelibrary/manageauthor"
            },
            {
                title : "Categories",
                icon  : <Icon name='qrcode' size='large' />,
                path  : "/managelibrary/managecategory"
            },
            {
                title : "Publishers",
                icon  : <Icon name='print' size='large'/>,
                path  : "/managelibrary/managepublisher"
            },
            {
                title : "Locations",
                icon  : <Icon name='point' size='large'/>,
                path  : "/managelibrary/managelocation"
            },
            {
                title : "Bookshelves",
                icon  : <Icon name='server' size='large'/>,
                path  : "/managelibrary/managebookshelf"
            },
            {
                title : "Departments",
                icon  : <Icon name='building' size='large'/>,
                path  : "/managelibrary/managedepartment"
            },
        ]
    }
    
]
export default LibSideBarData


export const ChiefLibSideBarData = [
    ...LibSideBarData,
    {
        title : "Book Request",
        icon  : <Icon name='book' size='large'/>,
        path  : "/bookrequest"
    },
    {
        title : "Statistic",
        icon  : <Icon name='book' size='large'/>,
        path  : "/statistic"
    }
]
 

