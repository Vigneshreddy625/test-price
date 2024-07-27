import React from "react";
import "./global.css";
import "./pricing.css";
import { useState, useEffect, useRef } from "react";
import plusImg from "../assets/plus.png";
import minusImg from "../assets/minus.png";
import nextImg from "../assets/next.png";
import developmentImg from "../assets/app-development.png";

function Price() {
  const plan = ["Monthly", "Half Yearly", "Anually"];
  const PriceYearly = ["4999", "9599", "12999"];
  const PriceMonthly = ["6999", "11999", "15999"];
  const PriceHalfYearly = ["5999", "10599", "13999"];
  const OriginalPriceYearly = ["12999", "19599", "22999"];
  const OriginalPriceMonthly = ["15999", "25999", "31999"];
  const OriginalPriceHalfYearly = ["13999", "20999", "27999"];
  const [selected, setSelected] = useState("Monthly");
  const [prices, setPrices] = useState(PriceMonthly);
  const [originalPrices, setOriginalPrices] = useState(OriginalPriceMonthly);
  const [billing, setBilling] = useState("billed monthly");
  const ToggleSwitch = (option) => {
    setSelected(option);
    switch (option) {
      case "Monthly":
        setOriginalPrices(OriginalPriceMonthly);
        setPrices(PriceMonthly);
        setBilling("billed every month");
        break;
      case "Half Yearly":
        setOriginalPrices(OriginalPriceHalfYearly);
        setPrices(PriceHalfYearly);
        setBilling("billed 6 months");
        break;
      case "Anually":
        setOriginalPrices(OriginalPriceYearly);
        setPrices(PriceYearly);
        setBilling("billed yearly");
        break;
      default:
        setPrices(PriceMonthly);
    }
  };
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "How long are your contracts?",
      answer:
        "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time.",
    },
    {
      question: "How long are your contracts?",
      answer:
        "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time.",
    },
    {
      question: "How long are your contracts?",
      answer:
        "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time.",
    },
    {
      question: "How long are your contracts?",
      answer:
        "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time.",
    },
    {
      question: "How long are your contracts?",
      answer:
        "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time.",
    },
    {
      question: "How long are your contracts?",
      answer:
        "Squarespace plans are paid monthly or yearly. We make it simple to start — and stop — your service at any time.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section class="hero">
        <div class="hero-container">
          <h1>Beautiful websites</h1>
          <h1 class="hero-head">Free for 14 days</h1>
          <div class="hero-flex yearly">
          <div class="grid items-center gap-x-1 rounded-full border p-1 font-semibold leading-5 border-white/5 bg-gray-800 grid-cols-3" data-testid="plan-toggle-buttons">
              {plan.map((option) => (
                <button
                  key={option}
                  onClick={() => ToggleSwitch(option)}
                  className={`px-4 py-2 rounded-full focus:outline-none ${
                    selected === option
                      ? "bg-indigo-600 text-white"
                      : "bg-transparent text-gray-500"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section class="plan">
        <div class="plan-container">
          <div class="plan-flex">
            <div class="plan-item">
              <h5>Basic</h5>
              <div class="price mb-6 flex items-center">
                <p class="text-gray-900 text-2xl font-semibold  leading-10  -tracking-wide">
                  <span class="flex gap-0" data-testid="finalPrice-Month48">
                    <s class="vertical text-sm font-normal flex items-center justify-center mr-2">
                      ₹{originalPrices[0]}
                    </s>
                    <span>₹{prices[0]}</span>
                  </span>
                </p>
                <div class="ml-4 w-full text-sm leading-5">
                  <p class="text-gray-700 text-sm font-normal">INR </p>
                  <p class="text-gray-500 text-sm">{billing}</p>
                </div>
              </div>
              <p class="plan-content">
                Our foundational plan with access to fully customizable,
                best-in-class templates.
              </p>

              <div class="plan-button">START FREE TRIAL</div>
              <p class="plan-feature-heading">PRODUCTS</p>
              <div class="plan-features">
                <div class="plan-feature-item">
                  <div class="plan-feature-flex">
                    <img
                      class="plan-feature-icon"
                      src={developmentImg}
                      alt=""
                    />
                    <h4>Mobile optimized websites</h4>
                  </div>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    title="Info icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.88889 6.22222V12.4444H7.11111V6.22222H8.88889Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      d="M8.88889 5.33333H7.11111V3.55556H8.88889V5.33333Z"
                      fill="#A2A2A2"
                    ></path>
                  </svg>
                </div>
                <div class="plan-feature-item">
                  <div class="plan-feature-flex">
                    <img
                      class="plan-feature-icon"
                      src={developmentImg}
                      alt=""
                    />
                    <h4>Templates to fit every need</h4>
                  </div>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    title="Info icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.88889 6.22222V12.4444H7.11111V6.22222H8.88889Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      d="M8.88889 5.33333H7.11111V3.55556H8.88889V5.33333Z"
                      fill="#A2A2A2"
                    ></path>
                  </svg>
                </div>
                <div class="plan-feature-item">
                  <div class="plan-feature-flex">
                    <img
                      class="plan-feature-icon"
                      src={developmentImg}
                      alt=""
                    />
                    <h4>Free custom domain*</h4>
                  </div>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    title="Info icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.88889 6.22222V12.4444H7.11111V6.22222H8.88889Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      d="M8.88889 5.33333H7.11111V3.55556H8.88889V5.33333Z"
                      fill="#A2A2A2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="plan-item relative" id="Mainplan">
              <span
                class="absolute left-0 top-0 flex -translate-y-3 translate-x-4 items-center gap-1 rounded-full bg-indigo-600 px-4 py-1 text-center text-xs font-semibold uppercase tracking-wider"

              >
                <span class="normal-case text-white">10% off</span>
              </span>
              <h5>Pro</h5>
              <div class="price mb-6 flex items-center">
                <p class="text-gray-900 text-2xl font-semibold  leading-10  -tracking-wide">
                  <span class="flex gap-0" data-testid="finalPrice-Month48">
                    <s class="vertical text-sm font-normal flex items-center justify-center mr-2">
                      ₹{originalPrices[1]}
                    </s>
                    <span>₹{prices[1]}</span>
                  </span>
                </p>
                <div class="ml-4 w-full text-sm leading-5">
                  <p class="text-gray-700 text-sm font-normal">INR </p>
                  <p class="text-gray-500 text-sm">{billing}</p>
                </div>
              </div>
              <p class="plan-content">
                Our foundational plan with access to fully customizable,
                best-in-class templates.
              </p>

              <div class="plan-button">START FREE TRIAL</div>
              <p class="plan-feature-heading">PRODUCTS</p>
              <div class="plan-features">
                <div class="plan-feature-item">
                  <div class="plan-feature-flex">
                    <img
                      class="plan-feature-icon"
                      src={developmentImg}
                      alt=""
                    />
                    <h4>Mobile optimized websites</h4>
                  </div>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    title="Info icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.88889 6.22222V12.4444H7.11111V6.22222H8.88889Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      d="M8.88889 5.33333H7.11111V3.55556H8.88889V5.33333Z"
                      fill="#A2A2A2"
                    ></path>
                  </svg>
                </div>
                <div class="plan-feature-item">
                  <div class="plan-feature-flex">
                    <img
                      class="plan-feature-icon"
                      src={developmentImg}
                      alt=""
                    />
                    <h4>Templates to fit every need</h4>
                  </div>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    title="Info icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.88889 6.22222V12.4444H7.11111V6.22222H8.88889Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      d="M8.88889 5.33333H7.11111V3.55556H8.88889V5.33333Z"
                      fill="#A2A2A2"
                    ></path>
                  </svg>
                </div>
                <div class="plan-feature-item">
                  <div class="plan-feature-flex">
                    <img
                      class="plan-feature-icon"
                      src={developmentImg}
                      alt=""
                    />
                    <h4>Free custom domain*</h4>
                  </div>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    title="Info icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.88889 6.22222V12.4444H7.11111V6.22222H8.88889Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      d="M8.88889 5.33333H7.11111V3.55556H8.88889V5.33333Z"
                      fill="#A2A2A2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="plan-item">
              <h5>Team</h5>
              <div class=" price mb-6 flex items-center">
                <p class="text-gray-900 text-2xl font-semibold  leading-10  -tracking-wide">
                  <span class="flex gap-0" data-testid="finalPrice-Month48">
                    <s class="vertical text-sm font-normal flex items-center justify-center mr-2">
                      ₹{originalPrices[2]}
                    </s>
                    <span>₹{prices[2]}</span>
                  </span>
                </p>
                <div class="ml-4 w-full text-sm leading-5">
                  <p class="text-gray-700 text-sm font-normal">INR </p>
                  <p class="text-gray-500 text-sm">{billing}</p>
                </div>
              </div>
              <p class="plan-content">
                Our foundational plan with access to fully customizable,
                best-in-class templates.
              </p>

              <div class="plan-button">START FREE TRIAL</div>
              <p class="plan-feature-heading">PRODUCTS</p>
              <div class="plan-features">
                <div class="plan-feature-item">
                  <div class="plan-feature-flex">
                    <img
                      class="plan-feature-icon"
                      src={developmentImg}
                      alt=""
                    />
                    <h4>Mobile optimized websites</h4>
                  </div>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    title="Info icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.88889 6.22222V12.4444H7.11111V6.22222H8.88889Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      d="M8.88889 5.33333H7.11111V3.55556H8.88889V5.33333Z"
                      fill="#A2A2A2"
                    ></path>
                  </svg>
                </div>
                <div class="plan-feature-item">
                  <div class="plan-feature-flex">
                    <img
                      class="plan-feature-icon"
                      src={developmentImg}
                      alt=""
                    />
                    <h4>Templates to fit every need</h4>
                  </div>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    title="Info icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.88889 6.22222V12.4444H7.11111V6.22222H8.88889Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      d="M8.88889 5.33333H7.11111V3.55556H8.88889V5.33333Z"
                      fill="#A2A2A2"
                    ></path>
                  </svg>
                </div>
                <div class="plan-feature-item">
                  <div class="plan-feature-flex">
                    <img
                      class="plan-feature-icon"
                      src={developmentImg}
                      alt=""
                    />
                    <h4>Free custom domain*</h4>
                  </div>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    title="Info icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.88889 6.22222V12.4444H7.11111V6.22222H8.88889Z"
                      fill="#A2A2A2"
                    ></path>
                    <path
                      d="M8.88889 5.33333H7.11111V3.55556H8.88889V5.33333Z"
                      fill="#A2A2A2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <a href="#table" class="plan-compare">
            <p className="underline">Compare features</p>
            <img src={nextImg} alt="" />
          </a>
        </div>
      </section>

      <section class="rate">
        <div class="rate-container">
          <div class="rate-item">
            <h2>180+</h2>
            <h4>Countries using the DataCamp platform</h4>
          </div>
          <div class="rate-item">
            <h2>4.0+ ⭐⭐⭐⭐</h2>
            <h4>Trusted by more than 13 million learners</h4>
          </div>
          <div class="rate-item">
            <h2>80%</h2>
            <h4>of the Fortune 1000 use DataCamp</h4>
          </div>
        </div>
      </section>

      <section class="tables">
        <div id="table" class="table-container">
          <table cellpadding="0" cellspacing="0" class="price-table">
            <thead class="table-heading">
              <tr>
                <th class="section-title css-11pi3d3" id="first-column-heading">
                  start learning
                </th>
                <th class="css-udv16e">
                  <div class="css-94lbqi">
                    Basic <strong class="css-1psl0n2">Free</strong>
                  </div>
                  <div class="css-1jal2oa">
                    <a
                      data-testid="Basic-cta-button"
                      data-trackid="Basic-cta-button"
                      href="/users/sign_up?from_pricing=true"
                      class="css-1leb99q"
                    >
                      <span class="css-61bni1">Get Started</span>
                    </a>
                  </div>
                </th>
                <th class="css-1x448vy">
                  <div class="css-80quf1">
                    <strong class="css-1n2to2z">Most Popular</strong>
                  </div>
                  <div class="css-94lbqi">
                    Premium
                    <strong class="css-1gqd8a3">
                      <span class="css-11pi3d3">$29 /month</span>
                    </strong>
                  </div>
                  <div class="css-1jal2oa">
                    <a
                      data-trackid="Premium-cta-button"
                      href="/subscribe?from_pricing=true&amp;pay_period=monthly&amp;product=premium"
                      class="css-1f9hrc8"
                    >
                      <span class="css-61bni1">Subscribe Now</span>
                    </a>
                  </div>
                </th>
                <th class="css-1avy2qp">
                  <div class="css-ff8iqy">
                    <strong class="css-4mgn3d">Special Price</strong>
                  </div>
                  <div class="css-94lbqi">
                    Teams
                    <strong class="css-1gqd8a3">
                      <span class="css-11pi3d3">
                        $12.42 per user /month
                        <span class="css-18palj1">
                          <br />
                          billed annually
                        </span>
                      </span>
                    </strong>
                  </div>
                  <div class="css-1jal2oa">
                    <a
                      data-testid="Teams-cta-button"
                      data-trackid="Teams-cta-button"
                      href="/groups/subscribe/account"
                      class="css-1leb99q"
                    >
                      <span class="css-61bni1">Set Up a Team</span>
                    </a>
                  </div>
                </th>
                <th class="css-gn75rm">
                  <div class="css-94lbqi">
                    Enterprise
                    <strong class="css-wzakpo">
                      Contact sales for pricing
                    </strong>
                  </div>
                  <div class="css-1jal2oa">
                    <a
                      data-testid="Enterprise-cta-button"
                      data-trackid="Enterprise-cta-button"
                      href="/business/demo"
                      class="css-1leb99q"
                    >
                      <span class="css-61bni1">Request a Demo</span>
                    </a>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="css-11pi3d3">First chapter of every course</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">
                  Access to the full course library (470+)
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">Unlimited</td>
                <td class="css-11pi3d3">Unlimited</td>
                <td class="css-11pi3d3">Unlimited and bespoke</td>
              </tr>
              <tr>
                <td class="css-11pi3d3">All cheat sheets</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">All tutorials</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">
                  Personalized and adaptive learning paths
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">Coming soon</td>
                <td class="css-11pi3d3">Coming soon</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Learn on mobile</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">Unlimited</td>
                <td class="css-11pi3d3">Unlimited</td>
                <td class="css-11pi3d3">Unlimited</td>
              </tr>
              <tr class="section-divider css-lgbo0i" id="section-0">
                <td class="section-title css-11pi3d3">
                  Demonstrate your skills
                </td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
              </tr>
              <tr class="section-row-one css-lgbo0i">
                <td class="css-11pi3d3">
                  Skill assessments to discover your level
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Earn certificates</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Employment-ready programs</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr class="section-divider css-lgbo0i" id="section-1">
                <td class="section-title css-11pi3d3">Get hired</td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
              </tr>
              <tr class="section-row-one css-lgbo0i">
                <td class="css-11pi3d3">Create a professional profile</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Share your portfolio of analyses</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Apply to jobs listed on DataCamp</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
              </tr>
              <tr class="section-divider css-lgbo0i" id="section-2">
                <td class="section-title css-11pi3d3">
                  Practice data analysis
                </td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
              </tr>
              <tr class="section-row-one css-lgbo0i">
                <td class="css-11pi3d3">Live code-alongs</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Competitions</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">Unlimited and bespoke</td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Bite-size practice exercises</td>
                <td class="css-11pi3d3">Limited</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Step-by-step coding projects</td>
                <td class="css-11pi3d3">Limited</td>
                <td class="css-11pi3d3">Unlimited</td>
                <td class="css-11pi3d3">Unlimited</td>
                <td class="css-11pi3d3">Unlimited</td>
              </tr>
              <tr class="section-divider css-lgbo0i" id="section-3">
                <td class="section-title css-11pi3d3">Be social</td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
              </tr>
              <tr class="section-row-one css-lgbo0i">
                <td class="css-11pi3d3">Join our global Slack community</td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">
                  Build and share your portfolio of analyses
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr class="section-divider css-lgbo0i" id="section-4">
                <td class="section-title css-11pi3d3">Get help</td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
              </tr>
              <tr class="section-row-one css-lgbo0i">
                <td class="css-11pi3d3">Priority Customer Support</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr class="section-divider css-lgbo0i" id="section-5">
                <td class="section-title css-11pi3d3">
                  Corporate learning features
                </td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
              </tr>
              <tr class="section-row-one css-lgbo0i">
                <td class="css-11pi3d3">Admin dashboard</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">License management</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Team performance reports</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Create your own custom tracks</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Skill Matrix</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Single Sign-On (SSO)</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">LMS/LXP integrations</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Connect data sources</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Customize reporting templates</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Included</span>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    height="24"
                    role="img"
                    width="24"
                  >
                    <title>Checkmark</title>
                    <path
                      fill="currentColor"
                      d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Dedicated Customer Success Manager</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">Speak to Sales</td>
              </tr>
              <tr>
                <td class="css-11pi3d3">Co-branded landing page</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">Teams of 20+</td>
              </tr>
              <tr class="section-divider css-lgbo0i" id="section-6">
                <td class="section-title css-11pi3d3">
                  Hire data professionals
                </td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
              </tr>
              <tr class="section-row-one css-lgbo0i">
                <td class="css-11pi3d3">Create a recruiter profile</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">Speak to Sales</td>
                <td class="css-11pi3d3">Speak to Sales</td>
              </tr>
              <tr>
                <td class="css-11pi3d3">List your jobs</td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">Speak to Sales</td>
                <td class="css-11pi3d3">Speak to Sales</td>
              </tr>
              <tr>
                <td class="css-11pi3d3">
                  Recruit from our pool of professionals
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">
                  <span class="css-tk5bo6">Not included</span>
                </td>
                <td class="css-11pi3d3">Speak to Sales</td>
                <td class="css-11pi3d3">Speak to Sales</td>
              </tr>
              <tr class="section-divider css-lgbo0i" id="section-7">
                <td class="section-title css-11pi3d3">Plans</td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3"></td>
              </tr>
              <tr class="section-row-one css-lgbo0i">
                <td class="css-11pi3d3"></td>
                <td class="th css-11pi3d3">
                  Basic <strong class="css-1psl0n2">Free</strong>
                </td>
                <td class="th css-fvvda5">
                  <div class="css-80quf1">
                    <strong class="css-1n2to2z">Most Popular</strong>
                  </div>
                  Premium
                  <strong class="css-1gqd8a3">
                    <span class="css-11pi3d3">$29 /month</span>
                  </strong>
                </td>
                <td class="th css-fvvda5">
                  <div class="css-ff8iqy">
                    <strong class="css-4mgn3d">Special Price</strong>
                  </div>
                  Teams
                  <strong class="css-1gqd8a3">
                    <span class="css-11pi3d3">
                      $12.42 per user /month
                      <span class="css-18palj1">
                        <br />
                        billed annually
                      </span>
                    </span>
                  </strong>
                </td>
                <td class="th css-11pi3d3">
                  Enterprise
                  <strong class="css-wzakpo">Contact sales for pricing</strong>
                </td>
              </tr>
              <tr class="section-ender css-lgbo0i" id="section-8">
                <td class="css-11pi3d3"></td>
                <td class="css-11pi3d3">
                  <a
                    data-testid="Basic-cta-button"
                    data-trackid="Basic-cta-button"
                    href="/users/sign_up?from_pricing=true"
                    class="css-1leb99q"
                  >
                    <span class="css-61bni1">Get Started</span>
                  </a>
                </td>
                <td class="css-11pi3d3">
                  <a
                    data-trackid="Premium-cta-button"
                    href="/subscribe?from_pricing=true&amp;pay_period=monthly&amp;product=premium"
                    class="css-1f9hrc8"
                  >
                    <span class="css-61bni1">Subscribe Now</span>
                  </a>
                </td>
                <td class="css-11pi3d3">
                  <a
                    data-testid="Teams-cta-button"
                    data-trackid="Teams-cta-button"
                    href="/groups/subscribe/account"
                    class="css-1leb99q"
                  >
                    <span class="css-61bni1">Set Up a Team</span>
                  </a>
                </td>
                <td class="css-11pi3d3">
                  <a
                    data-testid="Enterprise-cta-button"
                    data-trackid="Enterprise-cta-button"
                    href="/business/demo"
                    class="css-1leb99q"
                  >
                    <span class="css-61bni1">Request a Demo</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div aria-hidden="true" class="ie-vsWrapper css-1ho3t5z">
          <svg
            height="164"
            width="110"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="css-10s5lfq"
          >
            <g fill="none" fill-rule="evenodd" transform="rotate(90 55 55)">
              <circle
                class="broome_svg__c1"
                cx="109.03"
                cy="54.59"
                fill="#974dff"
                r="54.59"
              ></circle>
              <circle
                class="broome_svg__c2"
                cx="54.59"
                cy="54.59"
                fill="#ff6ea9"
                r="54.59"
              ></circle>
              <path
                class="broome_svg__p1"
                d="M81.81 7.26a54.59 54.59 0 0 1 0 94.67 54.57 54.57 0 0 1-27.38-47.34A54.57 54.57 0 0 1 81.71 7.31z"
                fill="#05172c"
              ></path>
            </g>
          </svg>
        </div>
      </section>

      <section class="cta">
        <div class="cta-container">
          <div class="cta-row1">
            <h5>Enterprise</h5>
            <h1>Custom plans for larger teams</h1>
            <p>
              Our premier website solution made for the unique needs of big
              business.
            </p>
            <div class="cta-button">Learn more</div>
          </div>
          <div class="cta-row2">
            <img
              src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq-container">
          <div className="faq-row1">
            <h1>Q&A</h1>
          </div>
          <div className="faq-row2">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-content">
                <div
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                >
                  <h3>{faq.question}</h3>
                  <img
                    src={openIndex === index ? minusImg : plusImg}
                    alt={openIndex === index ? "Minus icon" : "Plus icon"}
                    style={{
                      transform:
                        openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                <div
                  className={`faq-answer ${openIndex === index ? "show" : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Price;
