import React from "react";
import style from "./Landing.module.css";

const Landing = () => {
    return (
        <>
            <main className={style["Landing-Main-container"]}>
                <section className={style["Landing-Intro"]}>
                    <div className={style["Landing-Intro-text-field"]}>
                        <h1 className={style["Landing-Intro-title"]}>Numi. Лучшее приложение для нумизмата</h1>
                        <p className={style["Landing-Intro-par"]}>Создайте свой цифровой кляссер. Собирайте и систематизируйте без усилий.</p>
                        <a href="#Buy"><button className={style["Landing-Intro-button"]}>ПОЛУЧИТЬ ПЕРВЫМ</button></a>
                    </div>
                    <img className={style["appui-img"]} src="/appUI.png" alt="Интерфейс приложения"/>
                </section>
                <section className={style["Landing-List"]}>
                    <div className={style["Landing-List-container"]}>
                        <ul className={style["Landing-List-list"]}>
                            <li>Хотите похвалиться своим альбомом, но не желаете его везде носить?</li>
                            <li>Трудно отслеживать дубликаты в коллекции?</li>
                            <li>Нужна удобная фильтрация ваших монет?</li>
                            <li>Хотите иметь доступ к информации о коллекции в любое время и в любом месте?</li>
                            <li>Не помните есть ли у вас в коллекции монета именно такого номинала и именно этого года?</li>
                            <li>Тeряете важные данные и атрибуты о своих монетах?</li>
                        </ul>
                    </div>
                </section>
                <section className={style["Landing-Info"]}>
                    <div className={style["Landing-Info-container"]}>
                        <div className={style["Landing-Info-text-area"]}>
                            <h2 className={style["Landing-Info-title"]}>Что предлагает Numi?</h2>
                            <p className={style["Landing-Info-par"]}>Хранение вашей коллекции прямо у вас в кармане. Безопасное хранение и оффлайн доступ.</p>
                        </div>
                        <div className={style["Landing-Info-items-list"]}>
                            <div className={style["Landing-Info-items-list-item"]}>
                                <img className={style["Landing-Info-img"]} src="/settings.svg"/>
                                <h3 className={style["Landing-Info-items-list-item-title"]}>Удобные фильтры</h3>
                                <p className={style["Landing-Info-items-list-item-par"]}>Фильтрация по атрибутам. Их пересечениям и исключений</p>
                            </div>
                            <div className={style["Landing-Info-items-list-item"]}>
                                <img className={style["Landing-Info-img"]} src="/paper_sheets.svg"/>
                                <h3 className={style["Landing-Info-items-list-item-title"]}>Трекинг дубликатов</h3>
                                <p className={style["Landing-Info-items-list-item-par"]}>Добавьте дубликат и его фото</p>
                            </div>
                            <div className={style["Landing-Info-items-list-item"]}>
                                <img className={style["Landing-Info-img"]} src="/safe.svg"/>
                                <h3 className={style["Landing-Info-items-list-item-title"]}>Создание своего мюнцкабинета</h3>
                                <p className={style["Landing-Info-items-list-item-par"]}>Собирайте наборы монет разной тематики</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={style["Landing-Cost"]}>
                    <table className={style["Landing-Cost-table"]}>
                        <thead className={style["Landing-Cost-table-thead"]}>
                            <tr>
                                <th className={style["first-column-table-th"]}>Доступ</th>
                                <th>Бесплатно</th>
                                <th>249 р/месяц</th>
                                <th className={style["last-column-table-th"]}>1.999 р/год</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={style["first-column-table"]}>Кляссер</td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                            </tr>
                            <tr>
                                <td className={style["first-column-table"]}>Синхронизация Icloud</td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                            </tr>
                            <tr>
                                <td className={style["first-column-table"]}>Интерактивная статистика коллекции</td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                            </tr>
                            <tr>
                                <td className={style["first-column-table"]}>Фильтры со всеми атрибутами</td>
                                <td><img className={style["Cost-table-img"]} src="./cross-table.svg" alt="нет"/></td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                            </tr>
                            <tr>
                                <td className={style["first-column-table"]}>Мюнцкабинет</td>
                                <td><img className={style["Cost-table-img"]} src="./cross-table.svg" alt="нет"/></td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                            </tr>
                            <tr>
                                <td className={style["first-column-table"]}>~ 33% экономия</td>
                                <td><img className={style["Cost-table-img"]} src="./cross-table.svg" alt="нет"/></td>
                                <td><img className={style["Cost-table-img"]} src="./cross-table.svg" alt="нет"/></td>
                                <td><img className={style["Cost-table-img"]} src="./check-table.svg" alt="да"/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><a href="#Buy" className={style["Cost-table-button-a"]}><div className={style["Cost-table-button"]}>Получить первым</div></a></td>
                                <td><a href="#Buy" className={style["Cost-table-button-a"]}><div className={style["Cost-table-button"]}>Получить первым</div></a></td>
                                <td><a href="#Buy" className={style["Cost-table-button-a"]}><div className={style["Cost-table-button"]}>Получить первым</div></a></td>
                            </tr>        
                        </tbody>
                    </table>
                </section>
                <article id="Buy" className={style["Landing-Buy"]}>
                    <div className={style["Landing-Buy-container"]}>
                        <div className={style["Landing-Buy-text-area"]}>
                            <p className={style["Landing-Buy-text-area-title"]}>Получи приложение первым!</p>
                            <p className={style["Landing-Buy-text-area-par"]}>Оставь заявку и мы сразу же сообщим, когда приложение будет доступно в App Store</p>
                        </div>
                        <div className={style["Landing-Buy-form"]}>
                            <div className={style["Landing-Buy-form-input-container"]}>
                                <label className={style["Landing-Buy-label"]}>Имя</label>
                                <input className={style["Landing-Buy-input"]} type="text" placeholder="Ваше имя" name='name' />
                            </div>
                            <div className={style["Landing-Buy-form-input-container"]}>
                                <label className={style["Landing-Buy-label"]}>Email</label>
                                <input className={style["Landing-Buy-input"]} type="email" placeholder="Ваш Email" name='email' />
                            </div>
                        </div>
                        <button className={style["Landing-Buy-button"]}>Отправить</button>
                    </div>
                </article>
            </main>
            <footer className={style["Landing-Footer"]}>

            </footer>
        </>
    )
}

export default Landing;