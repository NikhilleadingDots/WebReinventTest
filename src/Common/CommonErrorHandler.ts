export const commonErrorHandler = (error: any) => {
    console.log("error", error);
    if (error?.status === 401) {
          alert(error);
    } else if (error?.status === 404) {
        alert(error);
      
    } else if (error?.status === 400) {
        alert(error);
    } else if (error?.status === 500) {
        alert(error);
    }
  };