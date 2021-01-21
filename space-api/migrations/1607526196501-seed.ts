import { MigrationInterface, QueryRunner } from 'typeorm';

export class seed1607526196501 implements MigrationInterface {
  name = 'seed1607526196501';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO public.galaxy (name, ordination, image_link) VALUES ('Andrômeda', 1, 'https://images.wallpaperscraft.com/image/stars_universe_space_118205_1920x1080.jpg');\n" +
        "INSERT INTO public.galaxy (name, ordination, image_link) VALUES ('Olho Negro', 3, 'https://data.1freewallpapers.com/download/planet-constellations-black-hole-space-1920x1080.jpg');\n" +
        "INSERT INTO public.galaxy (name, ordination, image_link) VALUES ('Via Láctea', 2, 'https://i.pinimg.com/originals/cb/c1/d5/cbc1d54e6de9f69ee89372439f432ca8.jpg');\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('NG-456', 1);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('K8-C35', 1);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('TH-578', 1);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('Radin', 1);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('Black', 2);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('Invillians', 2);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('TY-258', 2);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('Gold', 2);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('Sodium', 2);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('small-blue', 2);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('Satélite', 2);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('Saturno', 3);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('Terra', 3);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('Marte', 3);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('Jupiter', 3);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('Plutão', 3);\n" +
        "INSERT INTO public.planet (name, id_galaxy) VALUES ('Vênus', 3);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/qtr-tmyp-dqo', 1);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/ikf-icow-fod', 2);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/zkq-ttov-bba', 3);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/jvd-bgei-gtj', 4);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/tsd-dchk-sda', 5);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/hfc-ujjx-qss', 6);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/uah-mccf-dyb', 7);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/kzs-mxfw-oit', 8);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/kxf-ndbx-qib', 9);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/mkw-asrr-cux', 10);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/ozm-jjqa-vbc', 11);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/dfx-wgqj-mzz', 12);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/jiv-tcoh-bmk', 13);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/vap-grju-kjs', 14);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/rmt-khwm-bxj', 15);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/rmt-khwm-bxj', 15);\n" +
        "INSERT INTO public.meeting (link, id_planet) VALUES ('https://meet.google.com/myi-beri-tks', 17);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('admin', 'admin@invillia.com', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 4);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Matheus Benjamin', 'matheusbenjaminaragao-98@nogueiramoura.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 5);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Raimunda Sara Novaes', 'raimundasaranovaes-83@mesquita.not.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 7);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Jéssica Julia', 'jjessicajuliadrumond@salera.com.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 4);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Matheus Breno', 'matheusbrenorocha_@premierpet.com.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 11);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Sophia Marina', 'ssophiamarinaassuncao@yahho.com.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 3);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Guilherme Carlos', 'guilhermecarloseduardoanthonyviana..guilhermecarloseduardoanthonyviana@weatherford.com', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 16);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Marlene Rosângela', 'marlenerosangelaporto-81@tuds.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 17);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Cristiane Julia', 'cristianejuliaflavianogueira_@agencia10clic.com.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 13);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Lara Kamilly', 'larakamillyalanacortereal..larakamillyalanacortereal@vitalliimoveis.com', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 8);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Henrique Francisco', 'henriquefranciscoclaudiooliveira-74@zizafernandes.com', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 7);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Patrícia Mariah', 'patriciamariahmarciafogaca_@antunez.com.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 6);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Vinicius de Oliveira', 'viniciusoliveirabr9@gmail.com', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 16);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Marlene Juliana ', 'marlenejulianaterezadepaula__marlenejulianaterezadepaula@jsagromecanica.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 7);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Oliver Theo', 'olivertheocosta__olivertheocosta@cartovale.com.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 9);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Mariane Carolina ', 'marianecarolinalouisepeixoto..marianecarolinalouisepeixoto@meiryjoias.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 10);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Marcela Nina', 'marcelaninataniamelo..marcelaninataniamelo@cdcd.com.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 15);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Maria Adriana', 'mariaadrianamalumartins-97@fluxioneventos.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 13);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Yuri Pedro', 'yuripedrohenriquebaptista..yuripedrohenriquebaptista@easytechconsultoria.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 9);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Jorge Ryan', 'jorgeryandacruz..jorgeryandacruz@gmailo.com', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 7);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Mariane Regina', 'marianereginasebastianapinto..marianereginasebastianapinto@contabilidadelibra.com.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 5);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Silvana Nicole Lopes', 'silvananicolelopes..silvananicolelopes@santosdumonthospital.com', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 11);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Bryan Julio Jesus', 'bryanjuliojesus-70@bom.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 4);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Alana Isabelle', 'alanaisabellebeatrizdrumond_@caporal.biz', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 14);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Manoel Gabriel', 'manoelgabrielaragao_@vmetaiscba.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 11);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Neymar da Silva', 'neymarjr10@gmail.com', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 16);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Anderson Silva', 'andersonsilva15@outlook.com', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 15);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Aparecida Olivia', 'aparecidaoliviadarocha-86@dbacomp.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 13);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Mariah Simone', 'mariahsimonemoraes-80@jpmanager.com.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 3);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Felipe Neto', 'Felipenetoyt@gmail.com', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 1);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Raul Martin', 'raulmartindaconceicao_@iglod.com', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 17);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Lívia Antônia', 'liviaantoniamonteiro__liviaantoniamonteiro@lexos.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 15);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Catarina Sarah', 'catarinasarahmartins__catarinasarahmartins@ericsson.com', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 1);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Geraldo Antonio', 'ggeraldoantoniohenriquemoreira@gmx.de', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 2);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Nathan Otávio', 'nathanotavioluccafreitas..nathanotavioluccafreitas@valltech.com.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 13);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Allana Aline', 'aallanaalinemilenabarros@mucoucah.com.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 15);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Caio Joaquim', 'caiojoaquimcortereal__caiojoaquimcortereal@osite.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 8);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Osvaldo Pedro', 'oosvaldopedrorenanbarbosa@hotelruby.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 7);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Evelyn Sônia', 'evelynsoniahelenarodrigues-75@oliveiracontabil.com.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 4);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Leonardo Raimundo', 'lleonardoraimundonunes@riquefroes.com', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 15);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('José Carlos', 'josecarloseduardogabrielcosta_@unimedara.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 11);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Roberto Victor', 'rrobertovictordamota@autbook.com', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 3);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Thomas Caio', 'thomascaiocosta_@click21.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 16);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Sônia Flávia', 'soniaflaviapereira_@negleribeiro.com', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 17);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Larissa Liz', 'larissalizrodrigues..larissalizrodrigues@caocarinho.com.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 11);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Marina Tereza', 'marinaterezagabriellygomes_@vitaonline.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 1);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Heloisa Isabelly', 'heloisaisabellyalicegoncalves_@unimedrio.com.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 16);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Analu Agatha', 'analuagathadacruz__analuagathadacruz@operaconstrutora.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 8);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Pietro Severino', 'pietroseverinoantoniodarocha_@bernardino.co', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 12);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Rosa Sophia', 'rosasophiaemilycortereal_@bseletronicos.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 2);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Sérgio Thiago', 'ssergiothiagoandersonribeiro@aedu.com', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 13);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('André Filipe', 'andrefilipemarcosviniciusdarocha-72@foar.unesp.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 4);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Rafael Breno', 'rrafaelbrenoramos@cteep.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 11);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Rafaela Carla', 'rafaelacarladias_@dpauladecor.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 10);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Bento Juan', 'bbentojuanleonardoferreira@sicredi.com.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 9);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('José Tomás', 'josetomasbaptista__josetomasbaptista@eletrovip.com', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 14);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Daiane Fabiana', 'daianefabianacarvalho_@arecocomercial.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 5);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Gustavo Carlos', 'gustavocarloseduardonovaes-71@racml.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 10);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Nathan Nelson', 'nathannelsondanielgomes..nathannelsondanielgomes@antunez.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 7);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Giovanni Osvaldo', 'giovanniosvaldoassuncao-99@willianfernandes.com.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 13);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Enzo Nelson', 'enzonelsonlopes-79@gasparalmeida.com', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 2);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Sophia Marcela', 'sophiamarcelaassis-85@celiosilva.com', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 12);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Edson Otávio', 'edsonotavioandregoncalves-76@mindesign.com.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 16);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Maria Rebeca', 'mariarebecaraimundaferreira__mariarebecaraimundaferreira@efetivaseguros.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 17);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Giovanni Miguel', 'giovannimigueloliverlima..giovannimigueloliverlima@itau-unibanco.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 10);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Sabrina Francisca', 'sabrinafranciscadacosta__sabrinafranciscadacosta@imail.com', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 1);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Vicente Hugo', 'vicentehugolima__vicentehugolima@itelefonica.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 16);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Nicolas Kauê', 'nicolaskauegabrieldamota-80@zf.com', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 13);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Hugo Cláudio', 'hugoclaudiothaleslima-99@cebrace.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 8);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Sueli Brenda', 'suelibrendabarbosa__suelibrendabarbosa@fabianocosta.com.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 3);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Alana Joana', 'aalanajoanaclariceaparicio@torah.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 14);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Milena Catarina', 'milenacatarinaevelynmoraes__milenacatarinaevelynmoraes@tce.sp.gov.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 17);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Bryan Bruno', 'bbryanbrunocosta@yahoo.com.ar', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 1);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Igor Breno', 'igorbrenogoncalves-72@sgstelecom.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 11);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Luzia Manuela', 'luziamanuelaraqueldaluz..luziamanuelaraqueldaluz@golinelli.eti.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 15);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Aurora Esther', 'auroraestherantoniacarvalho-93@citi.com', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 6);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Breno César', 'brenocesarandrebernardes__brenocesarandrebernardes@maccropropaganda.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 6);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Sophia Heloisa', 'sophiaheloisakamillycaldeira_@ceuazul.ind.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 1);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Lucas Danilo', 'lucasdaniloteixeira_@cognis.com', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 12);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Antônia Emilly', 'antoniaemillyagathacampos__antoniaemillyagathacampos@outershoes.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 2);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Isabela Maitê', 'isabelamaitecarvalho__isabelamaitecarvalho@publifix.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 3);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Luna Priscila', 'llunaprisciladasilva@ativacofres.com.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 8);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Jaqueline Antonella', 'jaquelineantonellasoniaalmeida_@hushmail.com', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 13);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Catarina Maria', 'catarinamariaallanapeixoto-98@tec3.com.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 11);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Sérgio Marcelo', 'sergiomarcelosantos..sergiomarcelosantos@panevale.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 1);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Enzo Severino', 'enzoseverinohenriquelima..enzoseverinohenriquelima@gracomonline.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 2);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Marli Cláudia', 'marliclaudiabiancapires..marliclaudiabiancapires@live.jp', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 4);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('José Heitor', 'joseheitorcarvalho-92@dedicasa.com.br', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 6);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Giovanni Nelson', 'giovanninelsonpereira__giovanninelsonpereira@latapack.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 10);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Samuel Manoel', 'samuelmanoelraimundocaldeira_@agltda.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 16);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Nathan Bernardo', 'nathanbernardorodrigosouza_@tivit.com.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 12);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Diogo Benedito', 'ddiogobeneditonovaes@bernardino.co', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 5);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Larissa Nair', 'larissanairdanieladamota-91@cabletech.com.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 15);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Bruno Kauê', 'brunokauenicolasbaptista-77@brunofaria.com', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 10);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Fernando Juan', 'fernandojuanpires..fernandojuanpires@innovatis.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 7);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Ryan Luiz', 'ryanluizpaulonunes__ryanluizpaulonunes@amordeconvite.com.br', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 1);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Aline Gabriela', 'alinegabrielaamandacastro__alinegabrielaamandacastro@directnet.com', 2, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 3);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Gabrielly Laura', 'gabriellylaurarebecafigueiredo_@directnet.com.br', 3, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 17);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Vitor Francisco', 'vitorfranciscojorgemoura..vitorfranciscojorgemoura@eletrovip.com', 1, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 4);\n" +
        "INSERT INTO public.traveler (nick_name, email, avatar, password, id_planet) VALUES ('Roberto Benjamin', 'robertobenjaminlima..robertobenjaminlima@digen.com.br', 4, '$2a$08$7CH81VfFh6Z6A906rIqLn.ngKsyiKxgBSyB6BoUvL8UxmqsIRwfs6', 10);",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
