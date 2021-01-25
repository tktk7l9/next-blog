export const BLOG_API = "https://tktk7l9.microcms.io/api/v1/blog"
const key = {
  headers: { "X-API-KEY": process.env.API_KEY ?? "" },
}

export const getBlog = async () => {
  try {
    return await fetch(BLOG_API, key)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {}
}

export const getArticle = async (id: string, draftKey?: string) => {
  const params = draftKey ? `?draftKey=${draftKey}` : ""
  try {
    return await fetch(`${BLOG_API}/${id}${params}`, key)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {}
}
