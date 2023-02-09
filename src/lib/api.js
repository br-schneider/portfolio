/* eslint-disable react-hooks/rules-of-hooks */
import qs from 'qs'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL //|| "http://localhost:1337"
  }${path}`
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @param {string} key Key to use for the query
 * @returns Parsed API call response, or error, or loading state, or refetch function
 */
export function fetchAPI(path, urlParamsObject = {}, options = {}, key) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
    ...options,
  }

  // Build request URL
  const queryString = qs.stringify(urlParamsObject)

  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ''}`
  )}`

  const { isLoading, error, data, isFetching } = useQuery([key], () =>
    axios.get(requestUrl, mergedOptions).then((res) => {
      return res.data.data
    })
  )

  // Handle response
  if (error) {
    console.error(error.message)
  }

  return { data, isLoading, error, isFetching }
}
