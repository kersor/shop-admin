export const queryObjInLink = (obj: Record<string, any>) => {
    if (Object.keys(obj).length === 0) return ''

    let i = 1
    let query = ''

    for (const key in obj) {
        if (i === Object.keys(obj).length) {
            query += `${key}=${obj[key]}`
        } else {
            query += `${key}=${obj[key]}&`
        }  
        i++
    }

    return query
}