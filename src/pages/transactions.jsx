const Transactions = () => {
  return (
    <>
      <main className="main">
        <h2 className="sr-only">Accounts</h2>
        <section className="account transactions">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <i className="fa-solid fa-xmark"></i>
        </section>
        <section className="table">
          <div className="table__title">
            <div className="Date">Date</div>
            <div className="Description">Description</div>
            <div className="Amount">Amount</div>
            <div className="Balance">Balance</div>
          </div>
          <div className="table__article">
            <div className="Date">27/02/20</div>
            <div className="Description">Golden Sun Bakery</div>
            <div className="Amount">$8.00</div>
            <div className="Balance">$298.00</div>
          </div>
          <div className="table__article">
            <div className="Date">27/02/20</div>
            <div className="Description">Golden Sun Bakery</div>
            <div className="Amount">$8.00</div>
            <div className="Balance">$298.00</div>
          </div>
          <div className="table__article">
            <div className="Date">27/02/20</div>
            <div className="Description">Golden Sun Bakery</div>
            <div className="Amount">$8.00</div>
            <div className="Balance">$298.00</div>
          </div>
          <div className="table__article">
            <div className="Date">27/02/20</div>
            <div className="Description">Golden Sun Bakery</div>
            <div className="Amount">$8.00</div>
            <div className="Balance">$298.00</div>
          </div>
          <div className="table__article">
            <div className="Date">27/02/20</div>
            <div className="Description">Golden Sun Bakery</div>
            <div className="Amount">$8.00</div>
            <div className="Balance">$298.00</div>
          </div>
          <div className="table__article__components"></div>
        </section>
      </main>
    </>
  );
};

export default Transactions;
