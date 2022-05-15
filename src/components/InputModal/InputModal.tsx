// react
import * as React from "react";

// utils
import { isEmpty, validateLength } from "utils/validators";

interface Data {
  title: string;
  priority: number;
}

interface InputModalProps {
  open: boolean;
  onSubmit: (data: Data) => void;
  onClose: () => void;
}

function InputModal(props: InputModalProps) {
  // TODO: Add priority feature in InputModal
  const [title, setTitle] = React.useState("");
  // const [priority, setPriority] = React.useState(0);

  const resetForm = () => {
    setTitle("");
    // setPriority(0);
  };

  return (
    <div
      id="card-input-modal"
      aria-hidden="true"
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center ${
        props.open ? "" : "hidden"
      }`}
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="card-input-modal"
            onClick={() => {
              props.onClose();
              resetForm();
            }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Create A New Agenda
            </h3>
            <form
              className="space-y-6"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.target as HTMLFormElement);

                // Format Data
                const data: Data = {
                  title: formData.get("title") as string,
                  priority: 0,
                };

                // Clean Data
                data.title = data.title.trim();
                if (data.title === "") {
                  return;
                }

                // Send to parent component
                props.onSubmit({
                  title: data.title,
                  priority: data.priority,
                });

                // Reset Form
                resetForm();
              }}
            >
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your agenda
                </label>
                <input
                  autoFocus={true}
                  onChange={(event) => {
                    // Validation
                    const val = event.target.value;
                    if (validateLength(val, 60) || isEmpty(val)) {
                      setTitle(val);
                    }
                  }}
                  type="title"
                  name="title"
                  id="title"
                  value={title}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="What's your agenda?"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
