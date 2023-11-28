import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`grid h-10 w-40 place-content-center bg-primary font-bold transition-colors ${
        pending && "opacity-60"
      }`}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        "Send Message"
      )}
    </button>
  );
};

export default SubmitButton;
