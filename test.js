import * as React from "react";
import { render } from "react-dom";
import { useInView } from "react-intersection-observer";
import ScrollWrapper from "./elements/ScrollWrapper";
import Wrapper from "./elements/Wrapper";
import "./styles.css";

function App() {
  const [ref, inView] = useInView({
    threshold: 0.1
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1
  });

  const activeTab = () => {
    if (inView) {
      return 1;
    } else if (inView2 && !inView) {
      return 2;
    }
  };

  return (
    <ScrollWrapper inView={inView}>
      <div className="navbar">
        <div
          className={activeTab() === 1 ? "navbar__item active" : "navbar__item"}
        >
          First Section
        </div>
        <div
          className={activeTab() === 2 ? "navbar__item active" : "navbar__item"}
        >
          Second Section
        </div>
      </div>
      <Wrapper ref={ref}>
        <h2>This is the first section</h2>
      </Wrapper>
      <Wrapper ref={ref2}>
        <h2>This is the second section</h2>
      </Wrapper>
    </ScrollWrapper>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
