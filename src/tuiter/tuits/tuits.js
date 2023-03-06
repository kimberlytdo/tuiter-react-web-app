import React from "react";
const TuitItem = (
    {
        tuit = { iconImage : ',../../images/elon-musk.jpg/',
            userName: 'Elon Musk',
            subName: '@elonmusk',
            time: '23h',
            text: 'Amazing show about @Inspiration4x mission!',
            image: '../../images/inspire.jpg',
            title: 'Countdown: Inspiration4 Mission to Space | Netflix Offical Site',
            'description': 'From training to lauch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...',
            link: 'netflix.com',
            linkIcon: '',
            comment: '4.2k',
            share: '3.5k',
            love: '37.5k',
            upload: '' }
    }
) => {
    return(
        <li className="list-group-item border-0">
            <div className="row">
                <div className="col-1 ">
                    <img className="float-end rounded-pill" src={tuit.iconImage} height="40px"/>
                </div>
                <div className="col-11 ">
                    <div className="fw-bolder">
                        {tuit.userName} <i className="fas fa-check-circle ps-1"></i>
                        <span className="text-secondary fw-normal wd-text-post-small">{tuit.subName} * {tuit.time}</span>
                    </div>
                    <div className="pt-1 pb-2">
                        {tuit.text}

                    </div>
                    <div className="border rounded">
                        <div>

                            <img className=" border-bottom rounded-top pt-0" src={tuit.image} height="100%"
                                 width="100%"/>
                        </div>
                        <div className="fw-bolder ps-2 pe-1 fs-6">
                            {tuit.title}

                        </div>
                        <div className="text-secondary ps-2 pe-1  wd-text-post-small">
                            {tuit.description}

                        </div>
                        <div className="text-secondary wd-text-post-small">
                            {tuit.linkIcon}
                            {tuit.link}
                        </div>
                    </div>

                    <div>

                        <i className="far fa-comment ps-1 pt-3 text-secondary"></i>
                        <label className=" ps-1 pe-5 pt-3 text-secondary">{tuit.comment}</label>

                        <i className="fas fa-retweet ps-1 pt-3 text-secondary"></i>
                        <label className=" ps-1 pe-5 pt-3 text-secondary">{tuit.share}</label>

                        <i className="far fa-heart ps-1 pt-3 text-secondary"></i>
                        <label className=" ps-1 pe-5 pt-3 text-secondary">{tuit.share}</label>

                        <i className="fas fa-upload ps-1 pt-3 text-secondary"></i>

                    </div>
                </div>

            </div>
        </li>
    );
};
export default TuitItem;

