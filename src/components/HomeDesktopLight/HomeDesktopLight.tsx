import './HomeDesktopLight.css';

import settingsIcon from './assets/icons/settings.svg';
import sportFutbolIcon from './assets/icons/sport-futbol.svg';
import sportBasketballIcon from './assets/icons/sport-basketball.svg';
import sportTenisIcon from './assets/icons/sport-tenis.svg';
import sportEsportsIcon from './assets/icons/sport-esports.svg';
import sportVoleibolIcon from './assets/icons/sport-voleibol.svg';
import misApuestasIcon from './assets/icons/mis-apuestas.svg';
import futbolHeaderIcon from './assets/icons/futbol-header.svg';
import fireHotIcon from './assets/icons/fire-hot.svg';
import chevronPrevMatchIcon from './assets/icons/chevron-prev-match.svg';
import chevronNextMatchIcon from './assets/icons/chevron-next-match.svg';
import yellowCardIcon from './assets/icons/yellow-card.svg';
import goalBallIcon from './assets/icons/goal-ball.svg';
import chevronLeftRoundIcon from './assets/icons/chevron-left-round.svg';
import chevronRightRoundIcon from './assets/icons/chevron-right-round.svg';
import fireHotBadgeIcon from './assets/icons/fire-hot-badge.svg';
import yellowCardBadgeIcon from './assets/icons/yellow-card-badge.svg';
import redCardBadgeIcon from './assets/icons/red-card-badge.svg';
import ticketHeaderIcon from './assets/icons/ticket-header.svg';
import lightningIcon from './assets/icons/lightning.svg';
import westHamVsBurnleyPhoto from './assets/west-ham-vs-burnley.png';

type SportNavItem = {
  label: string;
  icon: string;
  active?: boolean;
};

const sportsNav: SportNavItem[] = [
  { label: 'Fútbol', icon: sportFutbolIcon, active: true },
  { label: 'Baloncesto', icon: sportBasketballIcon },
  { label: 'Tenis', icon: sportTenisIcon },
  { label: 'eSports', icon: sportEsportsIcon },
  { label: 'Voleibol', icon: sportVoleibolIcon },
];

const filterTabs = ['Próximas 2h', 'Hoy', 'Lunes', 'Martes'];

const hourSchedule = Array.from({ length: 24 }, (_, hour) => ({
  label: `${String(hour).padStart(2, '0')}:00`,
  matchCount: 2,
  isPast: hour === 13,
  isActive: hour === 14,
}));

type UpcomingMatch = {
  time: string;
  isLive?: boolean;
  league: string;
  isHot?: boolean;
  home: { name: string; yellowCards?: number; redCards?: number };
  away: { name: string; yellowCards?: number; redCards?: number };
  odds: [number, number, number];
};

const upcomingMatches: UpcomingMatch[] = [
  {
    time: "16'",
    isLive: true,
    league: 'Premier League',
    isHot: true,
    home: { name: 'Bournemouth', yellowCards: 2 },
    away: { name: 'Man City', yellowCards: 1, redCards: 1 },
    odds: [3.68, 4.28, 3.59],
  },
  {
    time: '14:30',
    league: 'Premier League',
    home: { name: 'Crystal Palace' },
    away: { name: 'Brighton' },
    odds: [3.24, 2.93, 3.78],
  },
];

const footerLinks = ['Términos y Condiciones', 'Privacidad', 'Ayuda', 'Contacto'];

export const HomeDesktopLight = () => (
  <div className="home-desktop-light">
    <header className="hdl-nav">
      <a className="hdl-nav__logo" href="https://bet-day-lite.vercel.app/">
        <span className="hdl-nav__logo-accent">BetDay</span>
        <span className="hdl-nav__logo-rest"> Lite</span>
      </a>
      <div className="hdl-nav__actions">
        <a className="hdl-btn hdl-btn--outline" href="https://bet-day-lite.vercel.app/settings">
          <img className="hdl-icon" src={settingsIcon} alt="" width={20} height={20} />
          Configuración
        </a>
        <a className="hdl-btn hdl-btn--primary" href="https://bet-day-lite.vercel.app/login">
          Iniciar sesión
        </a>
      </div>
    </header>

    <div className="hdl-layout">
      <aside className="hdl-sidebar">
        <h2 className="hdl-sidebar__title">Deportes</h2>
        <nav className="hdl-sidebar__nav">
          {sportsNav.map((item) => (
            <a
              key={item.label}
              className={`hdl-sidebar__item${item.active ? ' hdl-sidebar__item--active' : ''}`}
              href="https://bet-day-lite.vercel.app/"
            >
              <img className="hdl-icon" src={item.icon} alt="" width={24} height={24} />
              {item.label}
            </a>
          ))}
        </nav>
        <a className="hdl-sidebar__bets" href="https://bet-day-lite.vercel.app/profile">
          <img className="hdl-icon" src={misApuestasIcon} alt="" width={24} height={24} />
          Mis Apuestas
        </a>
      </aside>

      <main className="hdl-main">
        <div className="hdl-main__heading">
          <div className="hdl-main__heading-row">
            <img className="hdl-icon" src={futbolHeaderIcon} alt="" width={28} height={28} />
            <h2>Fútbol</h2>
          </div>
          <p className="hdl-main__subtitle">
            Partidos en vivo, cuotas actualizadas y marcadores de las mejores ligas del mundo
          </p>
        </div>

        <div className="hdl-filters">
          {filterTabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`hdl-filter-btn${index === 0 ? ' hdl-filter-btn--active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <section className="hdl-hero">
          <img className="hdl-hero__bg" src={westHamVsBurnleyPhoto} alt="West Ham vs. Burnley" />
          <div className="hdl-hero__overlay" />
          <div className="hdl-hero__content">
            <div className="hdl-hero__top-row">
              <div className="hdl-hero__badges">
                <span className="hdl-badge hdl-badge--live">
                  <span className="hdl-badge__dot" />
                  En Vivo - 76&apos;
                </span>
                <span className="hdl-badge hdl-badge--hot">
                  <img className="hdl-icon" src={fireHotIcon} alt="" width={14} height={14} />
                  Partido Caliente
                </span>
              </div>
              <div className="hdl-hero__pager">
                <button type="button" aria-label="Partido anterior en vivo">
                  <img className="hdl-icon" src={chevronPrevMatchIcon} alt="" width={14} height={14} />
                </button>
                <span>1 / 3</span>
                <button type="button" aria-label="Siguiente partido en vivo">
                  <img className="hdl-icon" src={chevronNextMatchIcon} alt="" width={14} height={14} />
                </button>
              </div>
            </div>

            <div className="hdl-hero__scoreboard">
              <div className="hdl-hero__score-row">
                <div className="hdl-hero__team hdl-hero__team--home">
                  <span className="hdl-hero__team-name">West Ham</span>
                  <span className="hdl-hero__team-cards">
                    <img className="hdl-icon" src={yellowCardIcon} alt="" width={14} height={14} />2
                  </span>
                </div>
                <span className="hdl-hero__score-box">2 - 0</span>
                <div className="hdl-hero__team hdl-hero__team--away">
                  <span className="hdl-hero__team-name">Burnley</span>
                  <span className="hdl-hero__team-cards">
                    <img className="hdl-icon" src={yellowCardIcon} alt="" width={14} height={14} />1
                  </span>
                </div>
              </div>
              <span className="hdl-hero__goal-badge">
                <img className="hdl-icon" src={goalBallIcon} alt="" width={14} height={14} />
                ¡Gol anotado recientemente!
              </span>
            </div>

            <div className="hdl-hero__odds">
              {(['1', 'X', '2'] as const).map((label, index) => (
                <button key={label} type="button" className="hdl-odds-btn">
                  <span className="hdl-odds-btn__label">{label}</span>
                  <span className="hdl-odds-btn__value">{[5.03, 4.03, 2.23][index].toFixed(2)}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="hdl-timeline">
          <div className="hdl-timeline__header">
            <span className="hdl-timeline__label">Horario del día</span>
            <button type="button" className="hdl-timeline__link">
              Ver todas las horas
            </button>
          </div>
          <div className="hdl-timeline__row">
            <button type="button" className="hdl-timeline__nav-btn" aria-label="Horas anteriores">
              <img className="hdl-icon" src={chevronLeftRoundIcon} alt="" width={16} height={16} />
            </button>
            <div className="hdl-timeline__scroller">
              {hourSchedule.map((hour) => (
                <button
                  key={hour.label}
                  type="button"
                  className={`hdl-hour-chip${hour.isActive ? ' hdl-hour-chip--active' : ''}`}
                >
                  {hour.isPast && <span className="hdl-hour-chip__dot" />}
                  {hour.label}
                  <span className="hdl-hour-chip__badge">{hour.matchCount}</span>
                </button>
              ))}
            </div>
            <button type="button" className="hdl-timeline__nav-btn" aria-label="Horas siguientes">
              <img className="hdl-icon" src={chevronRightRoundIcon} alt="" width={16} height={16} />
            </button>
          </div>
        </div>

        <div className="hdl-matches">
          <h3 className="hdl-matches__title">Partidos En Vivo y Próximos</h3>
          <div className="hdl-matches__grid">
            {upcomingMatches.map((match) => (
              <div className="hdl-match-card" key={`${match.home.name}-${match.away.name}`}>
                <div className="hdl-match-card__info">
                  <div className="hdl-match-card__time">
                    {match.isLive ? (
                      <span className="hdl-match-card__time--live">
                        <span className="hdl-badge__dot" />
                        {match.time}
                      </span>
                    ) : (
                      match.time
                    )}
                  </div>
                  <div className="hdl-match-card__teams">
                    <div className="hdl-match-card__league-row">
                      <span className="hdl-match-card__league">{match.league}</span>
                      {match.isHot && (
                        <span className="hdl-tag--hot">
                          <img className="hdl-icon" src={fireHotBadgeIcon} alt="" width={12} height={12} />
                          Hot
                        </span>
                      )}
                    </div>
                    {[match.home, match.away].map((team) => (
                      <div className="hdl-match-card__team-row" key={team.name}>
                        <span className="hdl-match-card__team-name">{team.name}</span>
                        {!!team.yellowCards && (
                          <span className="hdl-card-badge">
                            <img
                              className="hdl-icon"
                              src={yellowCardBadgeIcon}
                              alt=""
                              width={12}
                              height={12}
                            />
                            {team.yellowCards}
                          </span>
                        )}
                        {!!team.redCards && (
                          <span className="hdl-card-badge hdl-card-badge--red">
                            <img className="hdl-icon" src={redCardBadgeIcon} alt="" width={12} height={12} />
                            {team.redCards}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hdl-match-card__odds">
                  {(['1', 'X', '2'] as const).map((label, index) => (
                    <button key={label} type="button" className="hdl-odds-chip">
                      <span className="hdl-odds-chip__label">{label}</span>
                      <span className="hdl-odds-chip__value">{match.odds[index].toFixed(2)}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <aside className="hdl-betslip">
        <div className="hdl-betslip__header">
          <span className="hdl-betslip__title">
            <img className="hdl-icon" src={ticketHeaderIcon} alt="" width={20} height={20} />
            Tu Apuesta
          </span>
          <span className="hdl-betslip__count">0</span>
        </div>
        <div className="hdl-betslip__body">
          <p className="hdl-betslip__empty">No tienes selecciones todavía</p>
          <div className="hdl-betslip__field">
            <label className="hdl-betslip__label" htmlFor="bet-slip-stake">
              Monto Personalizado
            </label>
            <div className="hdl-betslip__input-wrap">
              <span className="hdl-betslip__input-currency">S/</span>
              <input
                id="bet-slip-stake"
                className="hdl-betslip__input"
                type="text"
                defaultValue="10.00"
                readOnly
              />
            </div>
          </div>
          <div className="hdl-betslip__quick-amounts">
            {[10, 20, 50, 100].map((amount) => (
              <button key={amount} type="button" className="hdl-betslip__quick-btn">
                S/ {amount}
              </button>
            ))}
          </div>
        </div>
        <div className="hdl-betslip__footer">
          <div className="hdl-betslip__summary">
            <div className="hdl-betslip__row">
              <span className="hdl-betslip__row-label">Importe</span>
              <span className="hdl-betslip__row-value">S/ 10.00</span>
            </div>
            <div className="hdl-betslip__row">
              <span className="hdl-betslip__row-label">Ganancia Potencial</span>
              <span className="hdl-betslip__row-value hdl-betslip__row-value--accent">S/ 10.00</span>
            </div>
          </div>
          <button type="button" className="hdl-betslip__submit" disabled>
            Realizar Apuesta
            <img className="hdl-icon" src={lightningIcon} alt="" width={20} height={20} />
          </button>
        </div>
      </aside>
    </div>

    <footer className="hdl-footer">
      <div className="hdl-footer__brand">
        <span className="hdl-footer__brand-name">BetDay Lite</span>
        <span className="hdl-footer__copyright">© 2024 BetDay Lite. Juego Responsable.</span>
        <span className="hdl-footer__credentials">
          Credenciales de prueba: at@apuestatotal.com / apuestatotal
        </span>
      </div>
      <nav className="hdl-footer__links">
        {footerLinks.map((link) => (
          <a key={link} href="https://bet-day-lite.vercel.app/">
            {link}
          </a>
        ))}
      </nav>
    </footer>
  </div>
);

export default HomeDesktopLight;
