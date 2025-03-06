import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = ({ scroll }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scroll > 200 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-hover transition-all duration-300 z-50"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 