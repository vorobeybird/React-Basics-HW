import { URLS } from "../constants/apiRouter";

type SideLinkType = {
    title: string,
    id: string,
    url: string,
    permission: string[],
}

const HOME: SideLinkType = {
    title: 'HOME',
    id: 'xzcjhklzx32332',
    url: URLS.home_route,
    permission: ['all']
}

const POSTS_PAGE: SideLinkType = {
    title: 'POSTS',
    id: 'sdf33788sdfsdf33',
    url: URLS.posts_route,
    permission: ['all']
}

const FIND_POST_PAGE: SideLinkType = {
    title: 'FIND POST',
    id: 'sdf33788sdfsdf33',
    url: URLS.not_found_route,
    permission: ['all']
}

const REGISTRATION_PAGE: SideLinkType = {
    title: 'REGISTRATION',
    id: 'sdf33788sdfsdf33',
    url: URLS.registration_route,
    permission: ['all']
}

export const HEADER_ROUTES = [HOME, POSTS_PAGE, FIND_POST_PAGE, REGISTRATION_PAGE];