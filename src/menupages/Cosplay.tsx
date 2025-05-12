/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import {pinewindgarden, assemblyhall, entryplaza, WarningAlert, toyota } from "../Utils";
import { Accordion, Card, Figure, Image, Row, Col } from 'react-bootstrap';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { CircledBullets } from '../Utils';

// const cosplaybanner = require('./../images/cosplaybanner.jpg');
import cosplaybanner from "./../images/cosplaybanner.jpg";
import medukitty from "./../images/medukitty.jpg";
import violetreverie from "./../images/violetreverie.jpg";
import cosplayrepair from "./../images/cosplayrepair.jpg";
import uniphants from "./../images/uniphants.jpg";
import pumpking from "./../images/pumpking.jpg";
import mysticallala from "./../images/mysticallala.jpg";

export const cosplayPage = {
    "header": (<><FontAwesomeIcon icon={faCameraRetro} fixedWidth></FontAwesomeIcon> Cosplay</>),
    "fluidImage": (<Image src={cosplaybanner} fluid />),
    "body": (<>
        <h4>Location(s)</h4>
        <p>Photoshoots will take place at the <b>Pine Wind Garden</b> (<CircledBullets argument="12"/> Cosplay Meetups), a beautiful Japanese-style garden ripe with photogenic spots. Cosplay Contest-related events will take place at the <b>Assembly Hall</b> (<CircledBullets argument="11"/> Theatre (Main Events)). Cosplay booths and repair is located at the <b>Toyota Meeting Hall</b> (<CircledBullets argument="5"/> Artist Alley & Cosplay Booths), next to the Torino Festival Plaza.</p>
        <Row className="justify-content-center text-center">
            <Col xs={12} md={10} lg={8}>
                <Figure>
                    <Figure.Image src={pinewindgarden} fluid rounded />
                    <Figure.Caption>Pine Wind Garden</Figure.Caption>
                </Figure>
            </Col>
            <Col xs={12} md={10} lg={8}>
                <Figure>
                    <Figure.Image src={assemblyhall} fluid rounded></Figure.Image>
                    <Figure.Caption>Assembly Hall (furniture may be adjusted depending on the event)</Figure.Caption>
                </Figure>
            </Col>
            <Col xs={12} md={10} lg={8}>
                <Figure>
                    <Figure.Image src={toyota} fluid rounded></Figure.Image>
                    <Figure.Caption>Toyota Meeting Hall</Figure.Caption>
                </Figure>
            </Col>
        </Row>

        <h4>Cosplay Rules</h4>
        <p>TouhouFest celebrates the creativity of cosplayers and encourage everyone to cosplay whomever they wish regardless of size, gender, age, religion, shape, color, or even species. Cosplay is all about having fun and creativity!</p>
        <Accordion className="my-2">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Cosplay Guidelines</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>No bare feet, some form of foot covering must be worn.</li>

                        <li>No hateful imagery should be included in cosplay for any reason. Cosplays must not be worn to agitate or intentionally offend other attendees.</li>

                        <ul>
                            <li>Examples include Nazi/SS imagery, KKK imagery, blackface, etc</li>
                        </ul>

                        <li>Costumes should not obstruct or impede the flow of traffic or entryway.</li>

                        <li>No excessively shedding props or costumes (Use of glitter, feathers, etc).</li>

                        <li>No blades or metal props. PVC and wood are fine!</li>

                        <li>Props must measure less than 6 feet in any arbitrary direction at rest. Expandable props and costumes can be extended temporarily for pictures or photoshoots, provided doing so does not interfere with traffic flow.</li>

                        <li>Costume and clothing should not expose the body in such a way as to be deemed indecent exposure. Private parts must be covered in an opaque material that will not slip or have gaps.</li>

                        <li>Males wearing tight-fitting costumes are required to wear a dance belt.</li>

                        <li>Costumes or props that offer extra mobility (i.e. skates, skateboards, in line skates, scooter, or bikes) can be used for display purposes only. They cannot be ridden around.</li>

                        <li>Vintage, historical, any non current uniform and any military or police-style costumes may be address at the convention’s discretion.</li>

                        <li>Any weapons props must be taken to a prop check to be checked and tagged.</li>

                    </ul>

                    <p>Attendees should understand and agree that, for their safety and the safety of everyone at TouhouFest, we have the absolute and immediate discretion and right to inspect your costumes, prop weapons, and any other items you bring to the Event. Because your safety and the safety of every attendee is of the utmost importance.</p>

                    <p>TouhouFest reserves the right to modify and/or update this policy at any time in their sole discretion and without prior notice.</p>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Props & Peace Bonding</Accordion.Header>
                <Accordion.Body>
                    <p>Prop weapons must be submitted to “Weapons Check” for Peace Bonding. TouhouFest has the sole discretion to approve prop weapons. Please visit us at one of our Weapons Check booths during the Event. TouhouFest Weapons Check booth locations shall be designated in the programs and on signs.</p>
                    <p>We may revoke your Peace Bond at any time in our sole discretion. Behavior which will warrant revocation of your Peace Bond includes:</p>
                    <ul>
                        <li>Brandishing an item in an inappropriate fashion, such as play-fighting or swinging the prop around</li>
                        <li>Causing complaints from other attendees of the Event</li>
                        <li>Tampering or altering of the Peace Bond</li>
                    </ul>
                    <h5>Prop Weapons</h5>
                    <p>Prop weapons are inoperable weapons that support the overall look of your costume or character. For example, plastic Airsoft guns, Nerf guns, water guns, dart guns, disc guns, pellet guns, and cap guns are prop weapons.</p>
                    <h5>Peace Bonding Rules</h5>
                    <p>If a prop weapon is, or was, at any time capable of firing anything, it must be rendered permanently inoperable in order to qualify for Peace Bonding. You can do this by, for example, permanently plugging the barrel with glue, caulk, or any non-removable substance and hot gluing all moving components of the prop in place. You must be able to prove that the prop weapon is permanently inoperable upon inspection.</p>
                    <p>In addition, to qualify for Peace Bonding, your prop weapon must meet the following criteria:</p>
                    <ul>
                        <li>All bladed props, prop firearms and prop knives cannot contain metal, have metal components, or have metal-based paints on them.</li>
                        <ul>
                            <li>Note: Lightsabers with metal hilts are allowed.</li>
                        </ul>
                        <li>Prop explosives or ammunition cannot be made out of metal.</li>
                        <li>All swords and bladed prop weapons must adhere to the following rules:</li>
                        <ul>
                            <li>They cannot be made out of metal</li>
                            <li>If your non-metal blade has a sharp edge or pointed tip, it must be anchored to a hard sheath for the duration of the Event</li>
                            <li>If you do not have a hard sheath, your non-metal blade must have a blunt edge and blunt tip</li>
                        </ul>
                        <li>All prop bows must be unstrung or have a low-tensile thread with no draw weight and be incapable of shooting.</li>
                        <li>All prop arrows must have blunt non-metal tips.</li>
                        <li>Metal chains are not permitted unless it is for cosplay and affixed to a piece of clothing and/or armor.</li>
                    </ul>
                    <p>If your prop weapon is a toy, look-alike, or imitation firearm, then federal regulations (<a href="https://www.ecfr.gov/current/title-15/subtitle-B/chapter-II/subchapter-H/part-272/section-272.3" rel="noreferrer">15 CFR § 272.3</a>) require that it either be translucent enough to, permit unmistakable observation of the device’s complete contents or must have at least one of the following:</p>
                    <ul>
                        <li>An Orange Solid Plug in Barrel: Have a blaze orange (Fed-Std-595B 12199) or orange color brighter than that specified by the federal standard color number solid plug permanently affixed to the muzzle end of the barrel as an integral part of the entire device and recessed no more than 6 millimeters from the muzzle end of the barrel; or</li>
                        <li>An Orange Barrel Marking: A blaze orange (Fed-Std-595B 12199) or orange color brighter than that specified by the federal standard color number, marking permanently affixed to the exterior surface of the barrel, covering the circumference of the barrel from the muzzle end for a depth of at least 6 millimeters; or</li>
                        <li>Entire Surface Coloration: Coloration of the entire exterior surface of the device in white, bright red, bright orange, bright yellow, bright green, bright blue, bright pink, or bright purple, either singly or as the predominant color in combination with other colors in any pattern.</li>
                    </ul>
                    <p>Please take care when outside or when transporting any form of firearm prop.</p>
                    <p>Regardless of how realistic the prop may look, ensure that it is completely hidden while traveling and be aware of your surroundings, attire, and the appearance of your props to bystanders when outside of TouhouFest. Do not assume a costume will reassure people that your prop is not a real weapon.</p>
                    <h5>Peace-Bonded Weapons at TouhouFest</h5>
                    <p>You may display your prop weapons only as costume pieces. Do not swing or brandish your prop weapon in any way that could be considered unsafe or threatening.</p>
                    <p>You may pose with a prop weapon in a brandishing manner, so long as no reasonable person would interpret it as anything but a pose for dramatic effect. TouhouFest staff or management may stop your posed brandishing in their sole discretion.</p>
                    <p>Please put your prop weapons away when leaving the Event site at night so that you don’t get the attention of local law enforcement. TouhouFest cannot be responsible for any actions taken by local law enforcement agencies, such as detaining and questioning you, if you decide to display or brandish your prop weapons at or outside of TouhouFest. </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Prohibited Items</Accordion.Header>
                <Accordion.Body>
                    <p><b><em>No Real Weapons Are Allowed at TouhouFest!</em></b></p>
                    <p>This includes firearms, knives, curios, relic antique firearms, any form of ammunition, any items designed or manufactured with the intent to cause death or serious bodily injury, whether carried openly or concealed, even if any such weapons are inoperable or unusable and irrespective of whether you are licensed to possess such weapons. Items that may otherwise be legal for you to own or carry are not welcome at TouhouFest if they violate this Prop / Replica Weapons Policy.</p>
                    <p>The following items are not permitted at TouhouFest:</p>
                    <ul>
                        <li>All Metal Weapons</li>
                        <li>Firearms, Ammunition, Rifles, Shotguns, Handguns, Blowguns, Tasers, Laser Pointers, Laser-Aiming Devices or similar Laser Devices</li>
                        <li>Explosives, Incendiary Devices, Chemical Weapons, and Pepper Spray / Mace</li>
                        <li>Knives, Live Blades/Swords (including Katana and other Martial Arts Style Swords), Daggers, Sword Canes, Switchblades, Bali-Song (Butterfly Knife), Axes, Kunai, Ice Skates, and Hatchets</li>
                        <li>Metal Pole Arms, Wooden/Metal Bats, Paddles, Stilts, Golf Clubs, and Vuvuzelas</li>
                        <li>Archery and Hunting Bows, Arrows, Nunchucks, Brass Knuckles, and Whips</li>
                        <li>Any item designed or manufactured with the intent to cause death or serious bodily injury to any person or property, any item that is illegal in the State of California, or any item that appears, in TouhouFest’s sole discretion, to be dangerous or which would pose or place others at risk or harm, immediate or otherwise.</li>
                    </ul>
                    <p>(Note: some venues prohibit other items e.g. glass bottles, food, alcohol, and e-cigarettes. Please check with the venue before bringing such items.)</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <h4 className="mt-3">Cosplay Meetups/Photoshoots</h4>

        <p>Photoshoots for select mainline Touhou games will be organized by our talented Cosplay Ambassadors. They are listed below as follows:</p>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>The Faithful Gods (TH10, TH12, TH13, TH16, TH18)</Accordion.Header>
                    <Accordion.Body>
                        <Card className="th10">
                            <Card.Body className="text-center">
                                <Card.Title>The Faithful Gods</Card.Title>
                                <Card.Text>Saturday, 5:00 PM - 6:30 PM</Card.Text>
                            </Card.Body>
                        </Card>
                        <p className="mt-2"><strong>Main Protagonists</strong></p>
                        <ul>
                            <li>Reimu</li>
                            <li>Marisa</li>
                        </ul>
                        <p><strong>Touhou 10 &quot;Mountain of Faith&quot;</strong></p>
                        <ul>
                            <li>Shizuha</li>
                            <li>Minoriko</li>
                            <li>Hina</li>
                            <li>Nitori</li>
                            <li>Momiji</li>
                            <li>Aya</li>
                            <li>Kanako</li>
                            <li>Suwako</li>
                        </ul>
                        <p><strong>Touhou 12 &quot;Undefined Fantastic Object&quot;</strong></p>
                        <ul>
                            <li>Sanae</li>
                            <li>Nazrin</li>
                            <li>Kogasa</li>
                            <li>Ichirn &amp; Unzan</li>
                            <li>Murasa</li>
                            <li>Shou</li>
                            <li>Byakuren</li>
                            <li>Nue</li>
                        </ul>
                        <p><strong>Touhou 13 &quot;Ten Desires&quot;</strong></p>
                        <ul>
                            <li>Sanae</li>
                            <li>Youmu</li>
                            <li>Yuyuko</li>
                            <li>Kogasa</li>
                            <li>Yoshika</li>
                            <li>Seiga</li>
                            <li>Tojiko</li>
                            <li>Futo</li>
                            <li>Nue</li>
                            <li>Mamizou</li>
                        </ul>
                        <p><strong>Touhou 16 &quot;Hidden Star in Four Seasons&quot;</strong></p>
                        <ul>
                            <li>Cirno</li>
                            <li>Aya</li>
                            <li>Eternity Larva</li>
                            <li>Nemuno</li>
                            <li>Lily White</li>
                            <li>Aunn</li>
                            <li>Narumi</li>
                            <li>Satono &amp; Mai</li>
                            <li>Okina</li>
                        </ul>
                        <p><strong>Touhou 18 &quot;Unconnected Marketeers&quot;</strong></p>
                        <ul>
                            <li>Sakuya</li>
                            <li>Sanae</li>
                            <li>Mike</li>
                            <li>Takane</li>
                            <li>Sanyo</li>
                            <li>Misumaru</li>
                            <li>Tsukasa</li>
                            <li>Megumu</li>
                            <li>Chimata</li>
                            <li>Momoyo</li>
                            <li>Murasa</li>
                            <li>Yuyuko</li>
                            <li>Youmu</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>The Devil's Mansion (TH06, Touhouvania)</Accordion.Header>
                    <Accordion.Body>
                        <Card className="mt-2 th06">
                            <Card.Body className="text-center">
                                <Card.Title>The Devil's Mansion</Card.Title>
                                <Card.Text>Sunday, 11:00 AM - 12:00 PM</Card.Text>
                            </Card.Body>
                        </Card>
                        <p className="mt-2"><strong>Touhou 6 &quot;Embodiment of Scarlet Devil&quot;</strong></p>
                        <ul>
                            <li>Reimu</li>
                            <li>Marisa</li>
                            <li>Rumia</li>
                            <li>Daiyousei</li>
                            <li>Cirno</li>
                            <li>Meiling</li>
                            <li>Koakuma</li>
                            <li>Patchouli</li>
                            <li>Sakuya</li>
                            <li>Remilia</li>
                            <li>Flandre</li>
                            <li>Rin Satsuki</li>
                        </ul>
                        <p><strong>Touhouvania / Koumanjou Densetsu 1 &amp; 2</strong></p>
                        <ul>
                            <li>All costumes and designs featured</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Melodies in the Netherworld (TH07, TH09)</Accordion.Header>
                    <Accordion.Body>
                        <Card className="mt-2 th07">
                            <Card.Body className="text-center">
                                <Card.Title>Melodies in the Netherworld</Card.Title>
                                <Card.Text>Sunday, 9:30 AM - 10:30 AM</Card.Text>
                            </Card.Body>
                        </Card>
                        <p className="mt-2"><strong>Touhou 7 &quot;Perfect Cherry Blossom&quot;</strong> </p>
                        <ul>
                            <li>Reimu</li>
                            <li>Marisa</li>
                            <li>Sakuya</li>
                            <li>Cirno</li>
                            <li>Letty</li>
                            <li>Chen</li>
                            <li>Alice</li>
                            <li>Lily White</li>
                            <li>Primsriver Sisters (Lunasa, Merlin &amp; Lyrica)</li>
                            <li>Youmu</li>
                            <li>Yuyuko</li>
                            <li>Ran</li>
                            <li>Yukari</li>
                        </ul>
                        <p><strong>Touhou 9 &quot;Phantasmagoria of Flower View&quot;</strong></p>
                        <ul>
                            <li>Reimu</li>
                            <li>Marisa</li>
                            <li>Sakuya</li>
                            <li>Cirno</li>
                            <li>Reisen</li>
                            <li>Youmu</li>
                            <li>Prismriver Sisters</li>
                            <li>Mystia</li>
                            <li>Tewi</li>
                            <li>Aya</li>
                            <li>Medicine</li>
                            <li>Yuuka</li>
                            <li>Komachi</li>
                            <li>Eiki</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Go to hell!! (TH11, TH17, TH17.5, TH19)</Accordion.Header>
                    <Accordion.Body>
                        <Card className="mt-2 th15">
                            <Card.Body className="text-center">
                                <Card.Title>Go to hell!!</Card.Title>
                                <Card.Text>Saturday, 10:00 AM - 11:00 AM</Card.Text>
                            </Card.Body>
                        </Card>
                        <p className="mt-2"><strong>Protagonists</strong></p>
                        <ul>
                            <li>Reimu</li>
                            <li>Marisa</li>
                        </ul>
                        <p><strong>Touhou 11 &quot;Subterranean Animism&quot;</strong></p>
                        <ul>
                            <li>Alice</li>
                            <li>Nitori</li>
                            <li>Patchouli</li>
                            <li>Suika</li>
                            <li>Yukari</li>
                            <li>Aya</li>
                            <li>Kisume</li>
                            <li>Yamame</li>
                            <li>Parsee</li>
                            <li>Yuugi</li>
                            <li>Satori</li>
                            <li>Orin</li>
                            <li>Okuu</li>
                            <li>Sanae</li>
                            <li>Koishi</li>
                            <li>Kanako</li>
                            <li>Suwako</li>
                        </ul>
                        <p><strong>Touhou 17 &quot;Wily Beast and Weakest Creature&quot;</strong></p>
                        <ul>
                            <li>Youmu</li>
                            <li>Eika</li>
                            <li>Urumi</li>
                            <li>Kutaka</li>
                            <li>Yachie</li>
                            <li>Mayumi</li>
                            <li>Keiki</li>
                            <li>Saki</li>
                        </ul>
                        <p><strong>Touhou 17.5 &quot;Gouyoku Ibun&quot;</strong></p>
                        <ul>
                            <li>Kanako</li>
                            <li>Murasa</li>
                            <li>Jo&#39;on &amp; Shion</li>
                            <li>Flandre</li>
                            <li>Okina</li>
                            <li>Yamame</li>
                            <li>Kogasa</li>
                            <li>Yuugi</li>
                            <li>Okuu</li>
                            <li>Kutaka</li>
                            <li>Yuuma</li>
                        </ul>
                        <p><strong>Touhou 19 &quot;Unfinished Dream of All Living Ghost&quot;</strong></p>
                        <ul>
                            <li>Sanae</li>
                            <li>Ran</li>
                            <li>Aunn</li>
                            <li>Nazrin</li>
                            <li>Seiran</li>
                            <li>Rin</li>
                            <li>Tsukasa</li>
                            <li>Mamizou</li>
                            <li>Yachie</li>
                            <li>Saki</li>
                            <li>Yuuma</li>
                            <li>Suika</li>
                            <li>Son Biten</li>
                            <li>Enoko</li>
                            <li>Chiyari</li>
                            <li>Hisami</li>
                            <li>Zanmu</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>PC-98 Games (TH01 ~ TH05)</Accordion.Header>
                    <Accordion.Body>
                        <Card className="mt-2 pc98">
                            <Card.Body className="text-center">
                                <Card.Title>PC-98 Games</Card.Title>
                                <Card.Text>Sunday, 10:30 AM - 11:00 AM</Card.Text>
                            </Card.Body>
                        </Card>
                        <p className='mt-2'><strong>Main Protagonists</strong></p>
                        <ul>
                            <li>Reimu</li>
                            <li>Marisa</li>
                        </ul>
                        <p><strong>Touhou 1 &quot;Highly Responsive to Prayers&quot;</strong></p>
                        <ul>
                            <li>Singyoku</li>
                            <li>Yuugenmagan</li>
                            <li>Elis</li>
                            <li>Sariel</li>
                            <li>Mima</li>
                            <li>Kikuri</li>
                        </ul>
                        <p><strong>Touhou 2 &quot;Story of Eastern Wonderland&quot;</strong></p>
                        <ul>
                            <li>Genji</li>
                            <li>Rika</li>
                            <li>Meira</li>
                            <li>Mima</li>
                        </ul>
                        <p><strong>Touhou 3 &quot;Phantasmagoria of Dimensional Dream&quot;</strong></p>
                        <ul>
                            <li>Mima</li>
                            <li>Ellen</li>
                            <li>Kana</li>
                            <li>Kotohime</li>
                            <li>Rikako</li>
                            <li>Yumemi</li>
                            <li>Ruukoto</li>
                            <li>Mimi-chan</li>
                        </ul>
                        <p><strong>Touhou 4 &quot;Lotus Land Story&quot;</strong></p>
                        <ul>
                            <li>Orange</li>
                            <li>Kurumi</li>
                            <li>Elly</li>
                            <li>Yuuka</li>
                            <li>Mugetsu</li>
                            <li>Gengetsu</li>
                        </ul>
                        <p><strong>Touhou 5 &quot;Mystic Square&quot;</strong></p>
                        <ul>
                            <li>Mima</li>
                            <li>Yuuka</li>
                            <li>Wheel Demon</li>
                            <li>Sara</li>
                            <li>Louise</li>
                            <li>Hikariko</li>
                            <li>Alice</li>
                            <li>Yuki</li>
                            <li>Mai</li>
                            <li>Ayano</li>
                            <li>Yumeko</li>
                            <li>Shinki</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Lunar Landing in the Bamboo Forest (TH08, TH15, TH14)</Accordion.Header>
                    <Accordion.Body>
                        <Card className="mt-2 th08">
                            <Card.Body className="text-center">
                                <Card.Title>Lunar Landing in the Bamboo Forest</Card.Title>
                                <Card.Text>Saturday, 4:30 PM - 5:30 PM</Card.Text>
                            </Card.Body>
                        </Card>
                        <p className="mt-2"><strong>Main Protagonists</strong></p>
                        <ul>
                            <li>Reimu</li>
                            <li>Marisa</li>
                        </ul>
                        <p><strong>Touhou 8 &quot;Imperishable Night&quot;</strong></p>
                        <ul>
                            <li>Yukari</li>
                            <li>Alice</li>
                            <li>Remilia</li>
                            <li>Sakuya</li>
                            <li>Yuyuko</li>
                            <li>Youmu</li>
                            <li>Wriggle</li>
                            <li>Mystia</li>
                            <li>Keine</li>
                            <li>Tewi</li>
                            <li>Reisen</li>
                            <li>Eirin</li>
                            <li>Kaguya</li>
                            <li>Mokou</li>
                        </ul>
                        <p><strong>Touhou 15 &quot;Legacy of Lunatic Kingdom&quot;</strong></p>
                        <ul>
                            <li>Sanae</li>
                            <li>Reisen</li>
                            <li>Seiran</li>
                            <li>Ringo</li>
                            <li>Doremy</li>
                            <li>Sagume</li>
                            <li>Clownpiece</li>
                            <li>Junko</li>
                            <li>Hecatia</li>
                        </ul>
                        <p><strong>Touhou 14 &quot;Double Dealing Character&quot;</strong></p>
                        <ul>
                            <li>Cirno</li>
                            <li>Wakasagahime</li>
                            <li>Sekibanki</li>
                            <li>Kagerou</li>
                            <li>Benben &amp; Yatsuhashi</li>
                            <li>Seija</li>
                            <li>Sukuna</li>
                            <li>Raiko</li>
                            <li>Mokou</li>
                            <li>Hecatia</li>
                            <li>Raiko</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Fighting Games (TH7.5, TH10.5, TH12.3, TH13.5, TH14.5, TH15.5)</Accordion.Header>
                    <Accordion.Body>
                        <Card className="mt-2 fight">
                            <Card.Body className="text-center">
                                <Card.Title>Fighting Games</Card.Title>
                                <Card.Text>Saturday, 11:30 AM - 12:30 PM</Card.Text>
                            </Card.Body>
                        </Card>
                        <p className="mt-2"><strong>Main Protagonists</strong></p>
                        <ul>
                            <li>Reimu</li>
                            <li>Marisa</li>
                        </ul>
                        <p><strong>Touhou 7.5 &quot;Immaterial and Missing Power&quot;</strong></p>
                        <ul>
                            <li>Sakuya</li>
                            <li>Alice</li>
                            <li>Patchouli</li>
                            <li>Youmu</li>
                            <li>Remilia</li>
                            <li>Yuyuko</li>
                            <li>Yukari</li>
                            <li>Suika</li>
                            <li>Meiling</li>
                        </ul>
                        <p><strong>Touhou 10.5 &quot;Scarlet Weather Rhapsody&quot;</strong></p>
                        <ul>
                            <li>Sakuya</li>
                            <li>Alice</li>
                            <li>Patchouli</li>
                            <li>Youmu</li>
                            <li>Remilia</li>
                            <li>Yuyuko</li>
                            <li>Yukari</li>
                            <li>Reisen</li>
                            <li>Suika</li>
                            <li>Aya</li>
                            <li>Komachi</li>
                            <li>Iku</li>
                            <li>Tenshi</li>
                        </ul>
                        <p><strong>Touhou 12.3 &quot;Hisoutensoku&quot;</strong></p>
                        <ul>
                            <li>Sanae</li>
                            <li>Cirno</li>
                            <li>Meiling</li>
                            <li>Alice</li>
                            <li>Patchouli</li>
                            <li>Okuu</li>
                            <li>Suwako</li>
                            <li>Hisoutensoku</li>
                            <li>Goliath Doll</li>
                        </ul>
                        <p><strong>Touhou 13.5 &quot;Hopeless Masquerade&quot;</strong></p>
                        <ul>
                            <li>Ichirn &amp; Unzan</li>
                            <li>Byakuren</li>
                            <li>Futo</li>
                            <li>Miko</li>
                            <li>Nitori</li>
                            <li>Koishi</li>
                            <li>Mamizou</li>
                            <li>Kokoro</li>
                        </ul>
                        <p><strong>Touhou 14.5 &quot;Urban Legend in Limbo&quot;</strong></p>
                        <ul>
                            <li>Ichiran &amp; Unzan</li>
                            <li>Byakuren</li>
                            <li>Futo</li>
                            <li>Miko</li>
                            <li>Nitori</li>
                            <li>Koishi</li>
                            <li>Mamizou</li>
                            <li>Kokoro</li>
                            <li>Mokou</li>
                            <li>Kasen</li>
                            <li>Sukun</li>
                            <li>Sumireko</li>
                            <li>Reisen</li>
                        </ul>
                        <p><strong>Touhou 15.5 &quot;Antimony of Common Flowers&quot;</strong></p>
                        <ul>
                            <li>Ichiran &amp; Unzan</li>
                            <li>Byakuren</li>
                            <li>Futo</li>
                            <li>Miko</li>
                            <li>Nitori</li>
                            <li>Koishi</li>
                            <li>Mamizou</li>
                            <li>Kokoro</li>
                            <li>Mokou</li>
                            <li>Kasen</li>
                            <li>Sukuna</li>
                            <li>Sumireko</li>
                            <li>Reisen</li>
                            <li>Doremy</li>
                            <li>Tenshi</li>
                            <li>Yukari</li>
                            <li>Jo&#39;on</li>
                            <li>Shion</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        <h5 className="mt-3">Other Photoshoots/Meet ups</h5>
        <p>The below photoshoots are also available for those interested.</p>
        <Row xs={1} md={2} lg={4} className="justify-content-center">
            <Col>
                <Card className="mt-2 pink-one">
                    <Card.Body className="text-center">
                        <Card.Title>Fangames Photoshoot</Card.Title>
                        <Card.Text>Sunday, 12:00 PM - 12:30 PM</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="mt-2 purple-one">
                    <Card.Body className="text-center">
                        <Card.Title>Fumo Meetup</Card.Title>
                        <Card.Text>Saturday, 3:00 PM - 4:00 PM</Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </Row>

        <h4 className="mt-2">Cosplay Repair</h4>
        <p>Did your cosplay unexpectedly explode into a million billion pieces? Jitters' cosplay repair stand may be able to help you. Look for the below banner in the Entry Plaza.</p>
        <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
                <Figure>
                    <Figure.Image src={cosplayrepair} fluid rounded />
                    <Figure.Caption>Cosplay Repair Banner</Figure.Caption>
                </Figure>
            </Col>
        </Row>
        <h4>Cosplay Contest</h4>
        <h5>Itinerary</h5>
        <ol>
            <li><b>Pre-Judging</b>: 12:00 PM - 1:00 PM</li>
            <ol type="a">
                <li>Particpants in the <em>Craftsmanship</em> Category need to attend this event</li>
            </ol>
            <li><b>Seating</b>: 1:00 PM - 1:30 PM</li>
            <li><b>Cosplay Contest</b>: 1:30 PM - 3:00 PM</li>
            <ol type="a">
                <li>During the cosplay judging period, CorpsDanceCrew will be giving a special performance!</li>
            </ol>
        </ol>
        <h5>Categories</h5>
        <p>There are three components within the Cosplay Contest:</p>
        <Row xs={1} md={3} className="justify-content-center gy-3">
            <Col>
                <Card className="pink-one">
                    <Card.Body>
                        <Card.Title className="text-center">Craftmanship</Card.Title>
                        <Card.Text>The Craftsmanship category will be judged based on how well you’ve made your costume. If you’re proud of your sewing, foamwork, or any other techniques you used to put your costume together, this category is for you! You’ll have time before the contest to meet with the judges so they can see your work up close and ask any questions. During the contest, you’ll walk across the stage and strike some cool poses in front of the audience!</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="red-one">
                    <Card.Body>
                        <Card.Title className="text-center">Performance</Card.Title>
                        <Card.Text>If you love to entertain, then consider entering the Performance category! You don’t have to have a self-made costume to perform, rather you’ll be judged on how well you’re able to capture the audience. This can be through a skit, dance, or anything else you can think of. You can be as comedic or dramatic as you’d like, so get creative!</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="purple-one">
                    <Card.Body>
                        <Card.Title className="text-center">Exhibition</Card.Title>
                        <Card.Text>The Exhibition category is for anyone that wants a chance to walk across the stage, but doesn’t want to compete. This is just for fun and is NOT eligible for prizes, so there are no limits to whether you’ve made your costume yourself or not. Anyone may participate in this category, including staff and guests. </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <h5 className="mt-3">Awards & Prizes</h5>
        <p>Please note that the Exhibition Category is not eligible for awards.</p>
        <Row xs={1} lg={3} className="gy-3 justify-content-center">
            <Col >
                <Card>
                    <Card.Body className="text-center gold-bg rounded">
                        <Card.Title>Best Craftsmanship</Card.Title>
                        <Card.Subtitle>Free TouhouFest 2026 Badge + Medal</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center silver-bg rounded">
                        <Card.Title>Runner-up Best Craftsmanship</Card.Title>
                        <Card.Subtitle>Medal</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center gold-bg rounded">
                        <Card.Title>Best Performance</Card.Title>
                        <Card.Subtitle>Free TouhouFest 2026 Badge + Medal</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center silver-bg rounded">
                        <Card.Title>Runner-up Best Performance</Card.Title>
                        <Card.Subtitle>Medal</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center gold-bg rounded">
                        <Card.Title>Judge's Choice (Per-Judge)</Card.Title>
                        <Card.Subtitle>Prizes up to Judge Discretion</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <h5 className="mt-3">About the Cosplay Contest Judges</h5>
        <Row xs={1} md={2} lg={4} className="gy-3">
            <Col>
                <Card>
                    <Card.Img variant="top" src={medukitty} />
                    <Card.Header className="text-center">Master of Ceremonies</Card.Header>
                    <Card.Body>
                        <Card.Title>Medukitty</Card.Title>
                        <Card.Text>I'm MeduKitty, a long time cosplayer and Touhou enthusiast who's thrilled to combine her two greatest passions!  I've been cosplaying from Touhou since 2018, and my favorite thing is making my costumes from scratch with as many details as I can fit into them.  I love our community so much and I can't wait to participate in TouhouFest with you all! </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Card.Link href="https://www.instagram.com/medukitty_/" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</Card.Link>
                        <Card.Link href="https://www.tiktok.com/@medukitty" target="_blank"><FontAwesomeIcon icon={faTiktok} /> TikTok</Card.Link>
                        <Card.Link href="https://twitter.com/medukitty" target="_blank"><FontAwesomeIcon icon={faXTwitter} /> Twitter</Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={pumpking} />
                    <Card.Header className="text-center">Cosplay Judge</Card.Header>
                    <Card.Body>
                        <Card.Title>Pumpking</Card.Title>
                        <Card.Text>Hi!! My name is Pumpking! I'm 24 years old (as of 2025) and got into Touhou in 2020 during Covid! I love to cosplay and especially pride myself in sharing cosplay designers and making shopping overseas more accessible for newcomers. I've started making my own stuff recently too. Thank you for having me!</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Card.Link href="https://www.instagram.com/sunnysiddedup/" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</Card.Link>
                        <Card.Link href="https://x.com/Sunnysiddedup" target="_blank"><FontAwesomeIcon icon={faXTwitter} /> Twitter</Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={mysticallala} />
                    <Card.Header className="text-center">Cosplay Judge</Card.Header>
                    <Card.Body>
                        <Card.Title>Mystical Lala</Card.Title>
                        <Card.Text>Hi I'm Lala! I'm just a girl who cosplays the characters she loves! I've been cosplaying since 2012, and I make, buy, alter cosplays! I love cosplaying mainly Touhou girls but I do stuff from other series as well. If you have any questions I can try to help! Anyone can cosplay as long as they have fun!</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Card.Link href="https://www.instagram.com/mystical.lala/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</Card.Link>
                        <Card.Link href="https://x.com/Mysticallala" target="_blank"><FontAwesomeIcon icon={faXTwitter} /> Twitter</Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Img variant="top" src={uniphants} />
                    <Card.Header className="text-center">Cosplay Guest Judge</Card.Header>
                    <Card.Body>
                        <Card.Title>Purple Uniphants</Card.Title>
                        <Card.Text>You can call me Uni! I've been cosplaying since 2011, and I ventured into Touhou shortly after. I have a handful of awards under my belt, but please don't be intimidated: I love seeing how we as cosplayers bring fiction to reality with our own styles and personalities. I owe all of my crafting knowledge to the internet, but I'm still not done learning!</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Card.Link href="https://www.instagram.com/purpleuniphants/" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</Card.Link>
                        <Card.Link href="https://x.com/purpleuniphants" target="_blank"><FontAwesomeIcon icon={faXTwitter} /> Twitter</Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
        <h5 className="mt-3">Rules</h5>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>General Rules</Accordion.Header>
                <Accordion.Body>
                    <p>These Rules apply to all three categories.</p>
                    <ul>
                        <li>Costumes must be from Touhou Project media; these include the games, lore, manga, CDs, etc. Original characters or those from other media are not eligible. Costumes based on fanworks or officially licensed media (i.e. Lost Word) are allowed. If entering the Craftsmanship Competition, sufficient reference images must be provided.</li>
                        <li>Costumes unable to fit through a standard door must be pre-approved.</li>
                        <li>Costumes that have restricted vision or hindered movement should indicate as such on their entry form.</li>
                        <li>One entry per attendee.</li>
                        <li>You may only enter in one category. For example, if you made your own cosplay but entered in Performance, we cannot award you for Craftsmanship and vice versa.</li>
                        <li>All entrants are expected to be on time to the main stage and walk the stage.</li>
                        <li>There is a limited number of spots for each category. Applications are accepted on a first-come, first-serve basis, so in-person applications will only be available if we still have space. Therefore, please consider applying online ahead of time! Performance entries will NOT be accepted in-person, as performances must be approved ahead of time.</li>
                        <li>TouhouFest staff and guests are ONLY eligible to participate in the Exhibition Category.</li>
                        <li>Be respectful of staff, the venue, and your fellow attendees. Follow the TouhouFest Convention Guidelines at all times.</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Craftsmanship Rules</Accordion.Header>
                <Accordion.Body>
                    <p>These Rules apply to only the Craftsmanship Category.</p>
                    <ul>
                        <li><b>At least half (50%) of your costume must be self-made.</b> Pieces not made by the entrant will be unable to be considered for judging.</li>
                        <li>Entrees must provide printed reference material of the character they’re cosplaying at the time of judging.</li>
                        <li>Printed work in progress photos of the costume are also strongly encouraged, but not required.</li>
                        <li>You must attend Pre-Judging before the show to be considered for an award. This is where the judges will meet with you for a few minutes to see your work up close and hear how you made your costume. When your entry is accepted, you will be contacted with more details on the time and location for Pre-Judging.</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Performance Rules</Accordion.Header>
                <Accordion.Body>
                    <p>These Rules apply to only the Performance Category.</p>
                    <ul>
                        <li>All audio, including dialogue, must be pre-recorded. There will be no mics available to use during performances.</li>
                        <li>Audio must be submitted and approved by staff before the contest. You will be contacted if any changes need to be made. The deadline for submitting audio is June 1st, with no further revisions accepted past June 6th.</li>
                        <li>Performances are limited to <b>2.5 minutes</b> in length. Any performance that goes over this limit will not be accepted.</li>
                        <li>Audio must be submitted as it is intended to be played. We can’t accommodate special requests to start and stop, or play multiple audio files. Please be kind to our sound team and make it as simple for them as possible!</li>
                        <li>You may have a maximum of five participants in your performance. Please be mindful of the size of the stage while planning.</li>
                        <li>Don’t throw anything into the audience.</li>
                        <li>All props must be easily cleared off of the stage at the end of the performance. This means that confetti, rose petals, glitter, or anything else messy is not allowed.</li>
                        <li>No pyrotechnics are allowed.</li>
                        <li>Stunts, combat, or any other potentially harmful actions are not allowed.</li>
                        <li>Do not jump off the stage or run into the audience during your performance.</li>
                        <li>The audience likes surprises, but the staff do not! Please do not make any last minute changes to your performance that’ll throw us off guard, especially if it violates any of these rules. </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    </>),
}