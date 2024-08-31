import { GoArrowRight as Arrow } from "react-icons/go";

import { useAppSelector, useAppDispatch } from "./../../../lib";
import { Input, Button, Modal } from "./../../../components";
import { useLogin } from "./";
import { auth } from "./../../../lib";

const Login = () => {
  const { Actions, selectedAuth } = auth;
  const dispatch = useAppDispatch();
  const { isLoading, showModal, errorMessage } = useAppSelector(selectedAuth);
  const { handleSubmit, updateField } = useLogin();

  const renderModal = (
    <Modal
      handleClose={() => dispatch(Actions.handleClose())}
      title="Error"
      extraClass="h-auto"
    >
      <>Error is: {errorMessage}</>
    </Modal>
  );

  const renderForm = (
    <form className="w-[480px] py-12  flex flex-col justify-center items-center bg-white rounded-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-14 border-b-2 border-solid border-gray-400 pb-2">
        login
      </h1>
      <div>
        <label className="block mb-4 text-base font-medium text-gray-700">
          username:
          <Input
            type="text"
            placeholder="Enter your username"
            name="username"
            onChange={updateField}
          />
        </label>
        <label className="block mb-4 text-base font-medium text-gray-700">
          password:
          <Input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={updateField}
          />
        </label>
        <Button
          type="submit"
          disabled={isLoading}
          onClick={handleSubmit}
          endIcon={<Arrow className="text-white ml-1" />}
        >
          Login
        </Button>
      </div>
    </form>
  );

  return (
    <>
      <>{showModal && renderModal}</>
      <div className="min-h-screen w-full flex justify-center items-center bg-gray-50">
        {renderForm}
      </div>
    </>
  );
};

export default Login;
