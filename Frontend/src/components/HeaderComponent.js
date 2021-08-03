import React, {Component} from "react";


class HeaderComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {

        }


    }


    render() {
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark badge-dark">
                        <img src="/photo_2021-08-02_21-24-01.jpg" alt="alternatetext"
                             width="500" height="200" class="center"/>
                    </nav>
                </header>

            </div>
        )
    }

}
export default HeaderComponent