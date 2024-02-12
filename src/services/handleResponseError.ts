import { toast } from "react-hot-toast";

type CustomError = {
  data: {
    error: {
      location: string;
      msg: string;
      path: string;
    }[];
    message: string;
  };
};

// import { toastHandler } from '@/components/utils/Toast'

const handleResponseError = (error: CustomError) => {
  if (error && error.data) {
    const { error: errors, message } = error.data;

    if (message) {
      toast.error(message);
      return;
    }

    if (typeof errors === "string") {
      toast.error(errors);
      return;
    }

    errors.forEach((error) => {
      return toast.error(error.msg);
    });

    // if (message) {

    //     if (message === "No Authorization" || message.includes("Auth token")) {
    //         redirect();
    //         return;
    //     }
    // }
  } else {
    console.log(error);
  }
};

export default handleResponseError;
