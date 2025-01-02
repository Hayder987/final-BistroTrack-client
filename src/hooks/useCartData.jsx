
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCartData = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: cartData = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const response = await axiosSecure.get(`/cart?email=${user.email}`);
      return response.data;
    },
    enabled: !!user?.email,
  });

  return {cartData, refetch};
};

export default useCartData;
