import React from "react";

export default function TransactionsCarousel({ transactions = [] }) {

    const repeatedTransactions = [...transactions, ...transactions];

  return (
    <div className="carousel-wrapper" >
      <div className="carousel-track">
        {repeatedTransactions.map((tx, index) => (
          <div className="transaction-card" key={index}>
            {tx.logo && (
              <img src={tx.logo} alt={`${tx.title} logo`} className="transaction-logo" />
            )}
            <h3 className="transaction-title">{tx.title}</h3>
            <p className="transaction-date">{tx.date}</p>
            <p className="transaction-desc">{tx.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
    // const chunkSize = 3;
    // const slides = [];
  
    // for (let i = 0; i < transactions.length; i += chunkSize) {
    //   slides.push(transactions.slice(i, i + chunkSize));
    // }
  
    // return (
    //   <div
    //     id="transactionsCarousel"
    //     className="carousel slide"
    //     data-bs-ride="carousel"
    //   >
    //     <div className="carousel-inner">
    //       {slides.map((group, slideIndex) => (
    //         <div
    //           key={slideIndex}
    //           className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
    //         >
    //           <div className="transactions-row">
    //             {group.map((tx, index) => (
    //               <a
    //                 key={index}
    //                 href={tx.link || "#"}
    //                 className="transaction-card-link"
    //               >
    //                 <div className="transaction-card">
    //                   {tx.logo && (
    //                     <img
    //                       src={tx.logo}
    //                       alt={`${tx.title} logo`}
    //                       className="transaction-logo"
    //                     />
    //                   )}
    //                   <h3 className="transaction-title">{tx.title}</h3>
    //                   <p className="transaction-date">{tx.date}</p>
    //                   <p className="transaction-desc">{tx.description}</p>
    //                 </div>
    //               </a>
    //             ))}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
  
    //     <button
    //       className="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#transactionsCarousel"
    //       data-bs-slide="prev"
    //     >
    //       <span className="carousel-control-prev-icon" />
    //     </button>
  
    //     <button
    //       className="carousel-control-next"
    //       type="button"
    //       data-bs-target="#transactionsCarousel"
    //       data-bs-slide="next"
    //     >
    //       <span className="carousel-control-next-icon" />
    //     </button>
    //   </div>
    //);
  //}