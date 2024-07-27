# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Here is the JSX code:


jsx
import React, { useState, useEffect } from 'react';

function StickyTable() {
  const [headingText, setHeadingText] = useState('Original Heading');

  useEffect(() => {
    const tableRef = document.getElementById('table-section');
    const headingRef = document.getElementById('first-column-heading');

    const handleScroll = () => {
      const sectionTitleElements = document.querySelectorAll('#table-section td#section-title');
      sectionTitleElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setHeadingText(element.textContent);
        }
      });
    };

    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        window.addEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 1.0,
    });
    observer.observe(tableRef);

    return () => {
      observer.unobserve(tableRef);
    };
  }, []);

  return (
    <div>
      <div id="table-section">
        <table>
          <thead>
            <tr>
              <th id="first-column-heading">{headingText}</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="section-title">Section Title 1</td>
              <td>Cell 2</td>
              <td>Cell 3</td>
              <td>Cell 4</td>
            </tr>
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
              <td id="section-title">Section Title 2</td>
              <td>Cell 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StickyTable;



const tableRef = useRef(null);

  const sectionRefs = useRef([]);
  const observerRef = useRef(null);

  // Initialize section refs and observer
  useEffect(() => {
    const sectionElements = sectionRefs.current;
    
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionElements.indexOf(entry.target);
          if (index > 0) {
            setHeadingText(sectionElements[index - 1].textContent);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.5, // Adjust threshold as needed
    });

    sectionElements.forEach(element => {
      observerRef.current.observe(element);
    });

    return () => {
      sectionElements.forEach(element => {
        observerRef.current.unobserve(element);
      });
    };
  }, []);

  // Function to set ref for each section title
  const setRef = (element) => {
    if (element && !sectionRefs.current.includes(element)) {
      sectionRefs.current.push(element);
    }
  };

<div class="mt-3 flex items-center md:my-auto lg:mt-3"><p class="text-gray-900 text-4xl font-bold  leading-10  -tracking-wide"><span class="flex gap-0" data-testid="finalPrice-Month48"><s class="vertical text-sm font-normal flex items-center justify-center mr-2">₹31,999</s><span>₹9,599</span></span></p><div class="ml-4 w-full text-sm leading-5"><p class="text-gray-700 text-sm font-normal">INR </p><p class="text-gray-500 text-sm">4 year access</p></div></div>