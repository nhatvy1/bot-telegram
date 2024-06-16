import http from "@/utils/http"

export const getUser  = async()=> {
  const res = await http.get<IResListUsers>('user')
	return res
}