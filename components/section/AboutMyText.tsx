// react
import * as React from 'react';
// @mui
import {
  Box,
  BoxProps,
  Typography,
  styled,
} from '@mui/material';
// custom component
import PageBox from '../common/PageBox'
// css
interface AboutMyTextProps {}

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
    height: '70em',
    display: 'flex',
    justifyContent: 'center',
}));

const TextBox = styled(Box)<BoxProps>(({}) => ({
    margin: '2em auto',
    width: '35em',
    height: '3em',
    boxShadow: '0.4em 0.4em 1em black',
    borderRadius: '0.5em',

}));

const AboutMyText: React.FunctionComponent<AboutMyTextProps> = () => {

    return (
    <CustomContainer>
                <PageBox>
              <Typography component='h2' variant='h5' fontWeight='bold' color='secondary' >
               Jmenuji se Žaneta Sabadková
              </Typography>

              <Typography component='h2' variant='h6'>
                O sobě si myslím si, že jsem hodně všestraná, mám hromadu zájmů, koníčků a chuť stále se učit a zdokonalovat.
              </Typography>

              <TextBox>
                <Typography component='h6' 
                              variant='h5' 
                              color='secondary' 
                              fontWeight='600'
                  >
                    Co dělám teď?
                  </Typography>
                </TextBox>

                <Typography component='p' variant='subtitle1' sx={{marginTop:'2em'}}>
                Mou nynější pracovní pozici lidé znají pod názvem rodičovská 'dovolená'.
                Že bych se doma nudila? To rozhodně ne.
                Co je náplní mé dosavadní práce a co mi přinesla?
                Učím své děti mluvit, chodit, poznávat zvířátka. Učím je, jak se správně chovat...
                Oni za to učí mně. Neomezené trpělivosti, že musím mít vše dobře rozplánované a rychle se přizpůsobit náhlým změnám. 
                Procvičují moji paměť, tím že si musím pamatovat kam co odložily. A učí mě stát si za svým.
                </Typography>

                <TextBox>
                <Typography component='h6' 
                              variant='h5' 
                              color='secondary' 
                              fontWeight='600'
                  >
                    Jak jsem se dostala ke kódování
                  </Typography>
                </TextBox>

                <Typography component='p' variant='subtitle1' sx={{marginTop:'2em'}}>
                Úplnou náhodou...
                Manžel, zkoušel programovat, a to bych nebyla já, kdybych si to taky nezkusila.
                Začalo mně to bavit. K tomu se přidala další náhoda v podobě Attaveny. 
                Kam jsem se dostala na Seberozvojový kurz a s tím, že už vím, co chci dál dělat, 
                jsem pokračovala na jejich další kurz - <b>Webová vývojářka</b>. A tím vším se rozjel můj vlak, v podobě večerů strávených u kódování.
                </Typography>

                <TextBox>
                <Typography component='h6' 
                              variant='h5' 
                              color='secondary' 
                              fontWeight='600'
                  >
                    Kým bych chtěla být
                  </Typography>
                </TextBox>

                <Typography component='p' variant='subtitle1' sx={{marginTop:'2em'}}>
                Chci dělat <b>Front-end</b>, do toho jsem se zamilovala. Chci se dál vzdělávat a posouvat svoje znalosti výš a výš.
                Baví mě psát kódy a hledat případné chyby. Baví mě přemýšlet, jak napsat kód lépe a srozumitelněji. 
                Sice jsem teprve na začátku, ale učím se rychle. Rychleji by to šlo, kdyby byl někdo, kdo by mi řekl, co dělám špatně a jak to udělat 
                lépe. Ve volných chvílích si pročítám články a blogy o Copywritingu a snažím se nahlédnout do světa UX Designu.
                </Typography>

                <TextBox>
                <Typography component='h6' 
                              variant='h5' 
                              color='secondary' 
                              fontWeight='600'
                  >
                    Jaký jsem člověk
                  </Typography>
                </TextBox>

                <Typography component='p' variant='subtitle1' sx={{marginTop:'2em'}}>
                Považuji se za workoholičku. Jsem tvrdohlavá, energická. Velmi ambiciózní. Přátelská a empatická.
                Mám nešvar, že když pracuji, potřebuji mít kolem sebe 'svůj pracovní chaos' a horkou kávu.
                Ráda čtu, i když na to, mi teď nezbývá tolik času.
                </Typography>

              </PageBox>
    </CustomContainer>
  );
};

export default AboutMyText;