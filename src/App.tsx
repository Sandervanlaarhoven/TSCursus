import { useState } from "react";
import Opdracht1 from "./Assignments/Opdracht1";
import "./styles.css";
import { Page } from "./types";
import Info1 from './InfoComponents/Info1';
import Opdracht10 from "./Assignments/Opdracht10";
import ExampleAss10 from "./Assignments/Opdracht10/Example";
import Example2Ass10 from "./Assignments/Opdracht10/Example2";
import Opdracht2 from "./Assignments/Opdracht2";
import Opdracht3 from "./Assignments/Opdracht3";
import Opdracht4 from "./Assignments/Opdracht4";
import Opdracht5 from "./Assignments/Opdracht5";
import Opdracht6 from "./Assignments/Opdracht6";
import Opdracht7 from "./Assignments/Opdracht7";
import Opdracht8 from "./Assignments/Opdracht8";
import Opdracht9 from "./Assignments/Opdracht9";
import Info2 from "./InfoComponents/info2";
import Info3 from "./InfoComponents/Info3";
import Info4 from "./InfoComponents/Info4";
import Info5 from "./InfoComponents/Info5";
import Info6 from "./InfoComponents/Info6";
import Info7 from "./InfoComponents/Info7";
import Info8 from "./InfoComponents/Info8";
import Opdracht11 from "./Assignments/Opdracht11";
import Opdracht12 from "./Assignments/Opdracht12";
import ExampleAss11 from "./Assignments/Opdracht11/Example";
import ExampleAss12 from "./Assignments/Opdracht12/Example";
import Info10 from "./InfoComponents/Info10";
import Info9 from "./InfoComponents/Info9";
import Opdracht13 from "./Assignments/Opdracht13";
import Info11 from "./InfoComponents/Info11";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Info1);
  const pages: Page[] = [
    Page.Info1,
    Page.Ass1,
    Page.Info2,
    Page.Ass2,
    Page.Info3,
    Page.Ass3,
    Page.Ass4,
    Page.Info4,
    Page.Ass5,
    Page.Ass6,
    Page.Info5,
    Page.Ass7,
    Page.Info6,
    Page.Ass8,
    Page.Info7,
    Page.Ass9,
    Page.Info8,
    Page.ExampleAss10,
    Page.Example2Ass10,
    Page.Ass10,
    Page.Info9,
    Page.ExampleAss11,
    Page.Ass11,
    Page.Info10,
    Page.ExampleAss12,
    Page.Ass12,
    Page.Info11,
    Page.Ass13,
  ];
  const PageList = () => {
    return (
      <div className="list">
        {pages.map((page) => (
          <div
            className={`listItem ${page === currentPage ? "current" : ""}`}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>
        ))}
      </div>
    );
  };
  let PageComponent = <div></div>;

  switch (currentPage) {
    case Page.Info1: {
      PageComponent = <Info1 />;
      break;
    }
    case Page.Info2: {
      PageComponent = <Info2 />;
      break;
    }
    case Page.Info3: {
      PageComponent = <Info3 />;
      break;
    }
    case Page.Info4: {
      PageComponent = <Info4 />;
      break;
    }
    case Page.Info5: {
      PageComponent = <Info5 />;
      break;
    }
    case Page.Info6: {
      PageComponent = <Info6 />;
      break;
    }
    case Page.Info7: {
      PageComponent = <Info7 />;
      break;
    }
    case Page.Info8: {
      PageComponent = <Info8 />;
      break;
    }
    case Page.Info9: {
      PageComponent = <Info9 />;
      break;
    }
    case Page.Info10: {
      PageComponent = <Info10 />;
      break;
    }
    case Page.Info11: {
      PageComponent = <Info11 />;
      break;
    }
    case Page.Ass1: {
      PageComponent = <Opdracht1 />;
      break;
    }
    case Page.Ass2: {
      PageComponent = <Opdracht2 />;
      break;
    }
    case Page.Ass3: {
      PageComponent = <Opdracht3 />;
      break;
    }
    case Page.Ass4: {
      PageComponent = <Opdracht4 />;
      break;
    }
    case Page.Ass5: {
      PageComponent = <Opdracht5 />;
      break;
    }
    case Page.Ass6: {
      PageComponent = <Opdracht6 />;
      break;
    }
    case Page.Ass7: {
      PageComponent = <Opdracht7 />;
      break;
    }
    case Page.Ass8: {
      PageComponent = <Opdracht8 />;
      break;
    }
    case Page.Ass9: {
      PageComponent = <Opdracht9 />;
      break;
    }
    case Page.ExampleAss10: {
      PageComponent = <ExampleAss10 />;
      break;
    }
    case Page.Example2Ass10: {
      PageComponent = <Example2Ass10 />;
      break;
    }
    case Page.Ass10: {
      PageComponent = <Opdracht10 />;
      break;
    }
    case Page.ExampleAss11: {
      PageComponent = <ExampleAss11 />;
      break;
    }
    case Page.Ass11: {
      PageComponent = <Opdracht11 />;
      break;
    }
    case Page.ExampleAss12: {
      PageComponent = <ExampleAss12 />;
      break;
    }
    case Page.Ass12: {
      PageComponent = <Opdracht12 />;
      break;
    }
    case Page.Ass13: {
      PageComponent = <Opdracht13 />;
      break;
    }
    default:
      break;
  }

  return (
    <div className="app">
      <div className="master">{PageList()}</div>
      <div className="detail">{PageComponent}</div>
    </div>
  );
}
