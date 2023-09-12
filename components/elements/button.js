export default function Button({ link, text, type = "default" }) {
  let buttonColor;
  let textColor;
  if (type == "primary") {
    buttonColor = "before:bg-primary";
    textColor = "text-white";
  } else {
    buttonColor = "before:bg-white";
    textColor = "text-black";
  }
  return (
    <>
      <a
        href={link}
        className={`relative flex h-9 w-full items-center justify-center px-4 before:absolute 
                              before:inset-0 before:rounded-full ${buttonColor} before:transition before:duration-300 
                              hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max`}
      >
        <span className={`relative text-sm font-semibold ${textColor}`}>
          {text}
        </span>
      </a>
    </>
  );
}
