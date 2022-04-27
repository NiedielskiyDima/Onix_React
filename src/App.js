import './App.css';
import './images/icon_interior.png';

function App() {
  return (
    <body>
    <div>
        <div id="header">
        <div id="block_row">
            <div class="header_name">
                <div class="header_h1">
                    <h1>Creative</h1>
                    <p id="header_p1">Interior design</p>
                </div>
                
            </div>
            <div class="header_img_flex">
                <div class="header_img">
                    <img src="./images/icon_interior.png" alt="icon interior"></img>
                </div>
                <div class="header_img_2">
                    <img src="images/icon_interior_2.png" alt="icon interior"></img>
                </div>
                <div class="header_img_2">
                    <img src="images/icon_interior_3.png" alt="icon interior"></img>
                </div>
            </div>
            <div class="header_menu">
                <nav class="header_nav">
                    <ul class="header_nav_line">
                        <li class="nav_home">
                            <a href="file:///C:/Users/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9/Documents/Onix_React/index.html#" class="link_nav">Home</a>
                        </li>
                        <li class="nav_design">
                            <a href="file:///C:/Users/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9/Documents/Onix_React/index.html#" class="link_nav">Design</a>
                        </li>
                        <li class="nav_contact">
                            <a href="file:///C:/Users/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9/Documents/Onix_React/index.html#" class="link_nav">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    
    <div id="description">
        <div class="desc_text">
            <h1 class="h1_desc_text">Modern style design</h1>
            <p>
                Interior design in a modern style has incredible dynamics. 
                It is contrasting, functional, comfortable. The design project of the apartment is consonant with the surrounding world. 
                It reflects the latest trends in furniture production, in the field of repair and furnishing. 
                The general principles of design can be described in just a few words: deliberate simplicity, closely intertwined with functionality.
            </p>
        </div>
        <img src="images/art.jpg" alt="Modern style design" class="desc_img"></img>
        <div class="desc_text">
            <h1 class="h1_desc_text">Styles and types of interior</h1>
            <p>
                What are the interior styles and how to choose the most suitable one? 
                Any owner of an apartment or house at least once thinks about this difficult issue. 
                A certain interior style is not a strict set of rules that must be followed, but only a direction within which there is always a place for 
                imagination and the realization of the customer's wishes.
            </p>
        </div>
    </div>
    <div id="main">
        <div id="main_div_line">
            <div class="main_div_img">
                <img src="images/main_.jpg" alt="Main design trends" class="main_img"></img>
            </div>
            <div class="main_div_p">
                <div>
                    <p class="p_main">
                        <h2 class="h2_main">
                            Main design trends
                        </h2>
                        Main design trends - modern style is a very capacious concept, covering a section of the most relevant and popular design solutions in the
                        decoration of an apartment. Ideas for interior design change according to the preferences of a particular era. This includes shapes and configurations,
                        a color palette, equipment with household appliances, the use of certain finishing materials.
                    </p>
                </div>

            </div>
        </div>
        <div id="main_div_line">
            <div class="main_div_p">
                <div >
                    <p class="p_main">
                        <h2 class="h2_main">
                        Moderate functionalism
                    </h2>
                        Functionality is given a special role. But it is not dominant in interior design. Unlike hi-tech and futurism, modern style is based on comfort, coziness, and convenience. 
                        That is why the apartment is equipped with appliances to the maximum, but at the same time, newfangled devices are not put on display. More often they are carefully built into furniture structures with sliding systems.
                    </p>
                </div>
            </div>
            <div class="main_div_img">
                <img src="images/main_2.jpg" alt="Moderate functionalism" class="main_img"></img>
            </div>
        </div>
        <div id="main_div_line">
            <div class="main_div_img">
                <img src="images/main_3.jpg" alt="Space zoning" class="main_img"></img>
            </div>
            <div class="main_div_p">
                <div>
                    <p class="p_main">
                        <h2 class="h2_main">
                            Space zoning
                        </h2>
                        The layout of the apartment necessarily takes into account the needs of residents. According to the latest modern trends, the interior is as spacious as possible, without unnecessary divisions into rooms and rooms.
                        Thanks to mobile partitions made of glass or compartment doors, it is quite possible to get an excellent zoning option in which every corner of the room will be meaningful, productive, and understandable.
                    </p>
                </div>

            </div>
        </div>
    </div>
    
    <div id="footer">
        
        <div class="github_footer">
            <a href="https://github.com/NiedielskiyDima/React_Onix" class="github_footer_a"> 
            <img src="images/iconmonstr-github-1-240.png" alt="Link GitHub"></img>
            </a>
        </div>
        <div class="footer_contact">
            <p class="footer_p">Creative interior design @ 2022   Niedielskiy Dima </p>
        </div>
        
    </div>
    </div>
    </body>
  );
}

export default App;
