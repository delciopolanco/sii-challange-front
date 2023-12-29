import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Post, Put, Get } from "services/creditcards/creditcard.service";
import { queryKeys } from "shared/constants/queryKeys";

export const useGetAllCreditcards = (page, pageSize) => {
  const {
    data: creditcards,
    isFetching,
    isSuccess,
    isError,
    refetch,
  } = useQuery({
    queryKey: [queryKeys.creditcard.getAll, page],
    queryFn: () => Get(page, pageSize),
  });

  return {
    creditcards,
    isSuccess,
    isError,
    isFetching,
    refetch,
  };
};

export const useSaveCreditCard = () => {
  const client = useQueryClient();

  const save = useMutation({
    queryKey: queryKeys.creditcard.save,
    mutationFn: (creditcard) =>
      creditcard.id ? Put(creditcard) : Post(creditcard),
    onSuccess: (response) => {
      if (response.code === 200) {
        client.invalidateQueries({
          queryKey: [queryKeys.creditcard.getAll],
        });
      }

      throw new Error("Response was not reached");
    },
  });

  return {
    save,
  };
};
