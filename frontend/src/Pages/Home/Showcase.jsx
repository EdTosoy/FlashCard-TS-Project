import React, { useContext } from "react";

import { HomeContext } from "../../ContextAPI/homeContext";

import "./Showcase.scss";

export default function Showcase() {
  const { darkTheme } = useContext(HomeContext);

  // const [imageData, setimageData] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos/?_limit=20")
  //     .then((response) => response.json())
  //     .then((data) => setimageData(data));
  // }, []);
  const sampleData = [
    {
      id: 1,
      url:
        "https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      url:
        "https://images.unsplash.com/photo-1571023479098-1ed95127545e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      url:
        "https://images.unsplash.com/photo-1527068589345-b736a7de9cc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      url:
        "https://images.unsplash.com/photo-1505632958218-4f23394784a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      url:
        "https://images.unsplash.com/photo-1580566059042-9b5771d31fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },

    {
      id: 6,
      url:
        "https://images.unsplash.com/photo-1590486804619-4d96e39c1f29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      url:
        "https://images.unsplash.com/photo-1531845116688-48819b3b68d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      url:
        "https://images.unsplash.com/photo-1572263900152-3b90431b95fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 9,
      url:
        "https://images.unsplash.com/photo-1512264716715-589ae22779b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 10,
      url:
        "https://images.unsplash.com/photo-1597124926410-071909e0db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 11,
      url:
        "https://images.unsplash.com/photo-1578329764194-f011d4e75e43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 12,
      url:
        "https://images.unsplash.com/photo-1581403241227-650fc9a88431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 13,
      url:
        "https://images.unsplash.com/photo-1593368938523-6a1597031b63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 14,
      url:
        "https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 15,
      url:
        "https://images.unsplash.com/photo-1508754219805-0612a6416e67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 16,
      url:
        "https://images.unsplash.com/photo-1511845241939-402489d3d670?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 17,
      url:
        "https://images.unsplash.com/photo-1563740287373-26145ec45a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 18,
      url:
        "https://images.unsplash.com/photo-1600307152606-17c9b6435f73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 19,
      url:
        "https://images.unsplash.com/photo-1510179569996-ba56582d4756?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 20,
      url:
        "https://images.unsplash.com/photo-1557955865-e945d0f8d6bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className={`showcase ${darkTheme && "dark-showcase"}`}>
      <div className="grid">
        {sampleData.map(({ url, id }) => (
          <img className="grid-item" key={id} src={url} alt="card" />
        ))}
      </div>
    </div>
  );
}
