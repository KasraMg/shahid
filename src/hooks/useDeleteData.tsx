import { useMutation, useQueryClient } from "@tanstack/react-query"; 
import Cookies from "js-cookie"; 
import { toast } from "./use-toast";
const apiUrl = import.meta.env.VITE_API_URL;

const useDeleteData = (
  url: string,
  successMsg: string | null,
  queryUpdate?: string,
) => {
  const accessToken = Cookies.get("AccessToken");
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isPending, isError } = useMutation({
    mutationFn: async () => {
      const headers: HeadersInit = {
        Authorization: `Bearer ${accessToken}`,
      };
      return await fetch(`${apiUrl}${url}`, {
        method: "DELETE",
        headers,
      }).then((res) => res);
    },
    onSuccess: (data) => { 
      console.log(data);
      
      if (successMsg && (data.status === 204 || data.status === 200)) {
        toast({
          variant: "success",
          title: successMsg,
        });
        queryUpdate &&
          queryClient.invalidateQueries({ queryKey: [queryUpdate] });
      }
    },
    onError: (data) => { 
      console.log(data); 
      toast({
        variant: "danger",
        title: "خطایی غیر منتظره رخ داد",
      });
      // location.reload();
    },
  });

  return { mutate, isSuccess, isPending, isError };
};

export default useDeleteData;
