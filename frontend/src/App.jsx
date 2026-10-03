import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">F</div>
          <div>
            <h2>Fernleaf</h2>
            <span>Kitchen Operations</span>
          </div>
        </div>

        <nav className="nav">
          <div className="nav-section">OVERVIEW</div>

          <div className="nav-item active">
            <span>▦</span>
            Dashboard
          </div>

          <div className="nav-item">
            <span>◉</span>
            Orders
            <span className="badge">24</span>
          </div>

          <div className="nav-item">
            <span>▤</span>
            Kitchen Board
          </div>

          <div className="nav-item">
            <span>➜</span>
            Dispatch
          </div>

          <div className="nav-section">MANAGEMENT</div>

          <div className="nav-item">
            <span>●</span>
            Companies
          </div>

          <div className="nav-item">
            <span>♙</span>
            Employees
          </div>

          <div className="nav-item">
            <span>◆</span>
            Catalogue
          </div>

          <div className="nav-item">
            <span>▥</span>
            Pricing
          </div>

          <div className="nav-item">
            <span>▣</span>
            Invoices
          </div>

          <div className="nav-section">SYSTEM</div>

          <div className="nav-item">
            <span>⚙</span>
            Settings
          </div>
        </nav>

        <div className="sidebar-bottom">
          <div className="user-avatar">A</div>
          <div className="user-info">
            <strong>Admin User</strong>
            <span>admin@test.com</span>
          </div>
          <span className="more">•••</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main">

        {/* Header */}
        <header className="header">
          <div>
            <h1>Good morning, Admin 👋</h1>
            <p>Here's what's happening in your kitchen today.</p>
          </div>

          <div className="header-actions">
            <button className="icon-btn">⌕</button>
            <button className="icon-btn">🔔</button>

            <div className="header-user">
              <div className="avatar">A</div>
              <div>
                <strong>Admin User</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* Date Bar */}
        <div className="date-bar">
          <div>
            <span className="today-label">TODAY</span>
            <strong>Monday, October 5, 2026</strong>
          </div>

          <button className="date-btn">
            This week ▾
          </button>
        </div>

        {/* Stats */}
        <section className="stats">

          <div className="stat-card">
            <div className="stat-top">
              <span className="stat-title">Today's Orders</span>
              <div className="stat-icon green">◉</div>
            </div>

            <div className="stat-number">128</div>

            <div className="stat-bottom">
              <span className="positive">↑ 12%</span>
              <span>vs yesterday</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span className="stat-title">To Be Cooked</span>
              <div className="stat-icon orange">♨</div>
            </div>

            <div className="stat-number">86</div>

            <div className="stat-bottom">
              <span className="warning">24 in progress</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span className="stat-title">Ready for Dispatch</span>
              <div className="stat-icon blue">➜</div>
            </div>

            <div className="stat-number">42</div>

            <div className="stat-bottom">
              <span className="positive">32 ready</span>
              <span>10 pending</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span className="stat-title">Today's Revenue</span>
              <div className="stat-icon purple">₹</div>
            </div>

            <div className="stat-number">₹48,650</div>

            <div className="stat-bottom">
              <span className="positive">↑ 8.4%</span>
              <span>vs last Monday</span>
            </div>
          </div>

        </section>

        {/* Content Grid */}
        <div className="content-grid">

          {/* Orders */}
          <section className="panel orders-panel">

            <div className="panel-header">
              <div>
                <h2>Today's Orders</h2>
                <p>Latest orders requiring attention</p>
              </div>

              <button className="view-btn">
                View all →
              </button>
            </div>

            <div className="filters">
              <button className="filter active">All <span>128</span></button>
              <button className="filter">Placed <span>18</span></button>
              <button className="filter">Confirmed <span>74</span></button>
              <button className="filter">Ready <span>24</span></button>
            </div>

            <div className="table">

              <div className="table-row table-head">
                <div>ORDER</div>
                <div>COMPANY</div>
                <div>DELIVERY</div>
                <div>STATUS</div>
                <div>TOTAL</div>
              </div>

              <div className="table-row">
                <div>
                  <strong>#FL-10482</strong>
                  <span className="sub">2 items</span>
                </div>

                <div>
                  <strong>Acme Technologies</strong>
                  <span className="sub">Rajkot Office</span>
                </div>

                <div>
                  <strong>12:30 PM</strong>
                  <span className="sub">Today</span>
                </div>

                <div>
                  <span className="status confirmed">Confirmed</span>
                </div>

                <div>
                  <strong>₹1,240</strong>
                </div>
              </div>

              <div className="table-row">
                <div>
                  <strong>#FL-10481</strong>
                  <span className="sub">3 items</span>
                </div>

                <div>
                  <strong>Vertex Solutions</strong>
                  <span className="sub">Ahmedabad Office</span>
                </div>

                <div>
                  <strong>1:00 PM</strong>
                  <span className="sub">Today</span>
                </div>

                <div>
                  <span className="status cooking">Cooking</span>
                </div>

                <div>
                  <strong>₹1,680</strong>
                </div>
              </div>

              <div className="table-row">
                <div>
                  <strong>#FL-10480</strong>
                  <span className="sub">1 item</span>
                </div>

                <div>
                  <strong>BluePeak Labs</strong>
                  <span className="sub">Nadiad Office</span>
                </div>

                <div>
                  <strong>1:30 PM</strong>
                  <span className="sub">Today</span>
                </div>

                <div>
                  <span className="status ready">Ready</span>
                </div>

                <div>
                  <strong>₹560</strong>
                </div>
              </div>

              <div className="table-row">
                <div>
                  <strong>#FL-10479</strong>
                  <span className="sub">4 items</span>
                </div>

                <div>
                  <strong>Nova Industries</strong>
                  <span className="sub">Gandhinagar Office</span>
                </div>

                <div>
                  <strong>2:00 PM</strong>
                  <span className="sub">Today</span>
                </div>

                <div>
                  <span className="status placed">Placed</span>
                </div>

                <div>
                  <strong>₹2,140</strong>
                </div>
              </div>

            </div>
          </section>

          {/* Right Column */}
          <div className="right-column">

            {/* Kitchen Progress */}
            <section className="panel kitchen-panel">

              <div className="panel-header">
                <div>
                  <h2>Kitchen Progress</h2>
                  <p>Today's preparation</p>
                </div>

                <button className="more-btn">•••</button>
              </div>

              <div className="progress-item">
                <div className="progress-label">
                  <span>Completed</span>
                  <strong>62</strong>
                </div>

                <div className="progress">
                  <div className="progress-fill completed"></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-label">
                  <span>In Progress</span>
                  <strong>24</strong>
                </div>

                <div className="progress">
                  <div className="progress-fill progress-orange"></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-label">
                  <span>Pending</span>
                  <strong>18</strong>
                </div>

                <div className="progress">
                  <div className="progress-fill progress-gray"></div>
                </div>
              </div>

              <button className="full-btn">
                Open Kitchen Board
              </button>

            </section>

            {/* Deliveries */}
            <section className="panel deliveries-panel">

              <div className="panel-header">
                <div>
                  <h2>Today's Deliveries</h2>
                  <p>Driver status</p>
                </div>

                <button className="view-btn">
                  View all →
                </button>
              </div>

              <div className="driver">

                <div className="driver-avatar">RK</div>

                <div className="driver-info">
                  <strong>Rahul Kumar</strong>
                  <span>4 drops assigned</span>
                </div>

                <span className="driver-status on-way">
                  On route
                </span>

              </div>

              <div className="driver">

                <div className="driver-avatar">AS</div>

                <div className="driver-info">
                  <strong>Arjun Shah</strong>
                  <span>3 drops assigned</span>
                </div>

                <span className="driver-status ready-driver">
                  Ready
                </span>

              </div>

              <div className="driver">

                <div className="driver-avatar">MP</div>

                <div className="driver-info">
                  <strong>Manish Patel</strong>
                  <span>5 drops assigned</span>
                </div>

                <span className="driver-status delivered">
                  Delivered
                </span>

              </div>

            </section>

          </div>
        </div>

        {/* Bottom */}
        <section className="bottom-grid">

          <div className="panel quick-panel">
            <div className="panel-header">
              <div>
                <h2>Quick Actions</h2>
                <p>Common operations</p>
              </div>
            </div>

            <div className="quick-actions">

              <button>
                <span className="quick-icon">＋</span>
                <div>
                  <strong>Create Order</strong>
                  <small>Create an order for an employee</small>
                </div>
              </button>

              <button>
                <span className="quick-icon">＋</span>
                <div>
                  <strong>Add Company</strong>
                  <small>Register a new company</small>
                </div>
              </button>

              <button>
                <span className="quick-icon">＋</span>
                <div>
                  <strong>Add Dish</strong>
                  <small>Add item to catalogue</small>
                </div>
              </button>

            </div>
          </div>

          <div className="panel alert-panel">

            <div className="panel-header">
              <div>
                <h2>Needs Attention</h2>
                <p>Items requiring action</p>
              </div>
            </div>

            <div className="alert-item">
              <div className="alert-icon warning-icon">!</div>
              <div>
                <strong>6 orders approaching cut-off</strong>
                <span>Review before 4:00 PM</span>
              </div>
            </div>

            <div className="alert-item">
              <div className="alert-icon error-icon">!</div>
              <div>
                <strong>3 dishes missing prices</strong>
                <span>Standard price tier</span>
              </div>
            </div>

            <div className="alert-item">
              <div className="alert-icon blue-icon">i</div>
              <div>
                <strong>2 unassigned deliveries</strong>
                <span>Need a driver assignment</span>
              </div>
            </div>

          </div>

        </section>

        <footer>
          <span>Fernleaf Kitchen Operations</span>
          <span>© 2026 · Internal Admin Panel</span>
        </footer>

      </main>
    </div>
  );
}

export default App;