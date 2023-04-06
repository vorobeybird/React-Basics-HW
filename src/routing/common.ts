import { URLS } from '../constants/apiRouter'
import HomePageContainer from '../containers/HomePageContainer/HomePageContainer'
import PostsPageContainer from '../containers/PostsPageContainer/PostsPageContainer'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import PostPage from '../pages/PostPage/PostPage'

type RouteType = {
    path: string,
    id: string,
    component: any,
    isAuth: boolean,
}

const HOME_PAGE: RouteType = {
    path: URLS.home_route,
    id: 'sdf33788sdfsdfg33',
    component: HomePageContainer,
    isAuth: false,
}

const POSTS_PAGE: RouteType = {
    path: URLS.posts_route,
    id: 'sdf33788hhsdfsdf33',
    component: PostsPageContainer,
    isAuth: false,
}

const POST_PAGE: RouteType = {
    path: URLS.post_route,
    id: 'sdf3378238sdfsdf33',
    component: PostPage,
    isAuth: false,
}

const REGISTRATION_PAGE: RouteType = {
    path: URLS.registration_route,
    id: 'sdf33788s53dfsdf33',
    component: HomePageContainer,
    isAuth: false,
}

const PAGE_NOT_FOUND: RouteType = {
    path: URLS.not_found_route,
    id: 'sdfsdfssdffd46grddf33',
    component: NotFoundPage,
    isAuth: false,
}


export const ROUTES = [HOME_PAGE, POSTS_PAGE, POST_PAGE, REGISTRATION_PAGE, PAGE_NOT_FOUND];
