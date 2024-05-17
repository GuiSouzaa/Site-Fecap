import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

const Card = styled.div`
padding: 4rem;
background: #fff;



h1 {
text-align: center;
}

.cards__container {
display: flex;
flex-flow: column;
align-items: center;
max-width: 1120px;
width: 90%;
margin: 0 auto;
}

.cards__wrapper {
position: relative;
margin: 50px 0 45px;
}

.cards__items {
margin-bottom: 24px;
}

.cards__item {
display: flex;
flex: 1;
margin: 0 1rem;
border-radius: 10px;
}

.cards__item__link {
display: flex;
flex-flow: column;
width: 100%;
box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
-webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
border-radius: 10px;
overflow: hidden;
text-decoration: none;
}

.cards__item__pic-wrap {
position: relative;
width: 100%;
padding-top: 67%;
overflow: hidden;
}

.fade-img {
animation-name: fade-img;
animation-duration: 2s;
}

.cards__item__pic-wrap::after {
content: attr(data-category);
position: absolute;
bottom: 0;
margin-left: 10px;
padding: 6px 8px;
max-width: calc((100%) - 60px);
font-size: 12px;
font-weight: 700;
color: #fff;
background-color: #1f98f4;
box-sizing: border-box;
}

.cards__item__img {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
display: block;
width: 100%;
max-width: 100%;
height: 100%;
max-height: 100%;
object-fit: cover;
transition: all 0.2s linear;
}

.cards__item__img:hover {
transform: scale(1.1);
}

.cards__item__info {
padding: 20px 30px 30px;
}

.cards__item__text {
color: #252e48;
font-size: 18px;
line-height: 24px;
}

@media only screen and (min-width: 1200px) {
.content__blog__container {
  width: 84%;
}
}

@media only screen and (min-width: 1024px) {
.cards__items {
  display: flex;
}
}

@media only screen and (max-width: 1024px) {
.cards__item {
  margin-bottom: 2rem;
}
}
`;


function Cards() {
  return (
    <Card>
      <h1>Ultimos do evento na FECAP</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Desbravando o universo dos dados: palestra emocionante sobre a ciência de dados'
              label='T.i'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Palestra dinâmica sobre educação financeira para todos, poupe, invista, conquiste independência financeira.'
              label='Finanças'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Construindo o futuro: palestra motivadora sobre a importância da educação para todos'
              label='Educação'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Explorando novos horizontes: palestra envolvente sobre o papel da IA na sociedade'
              label='T.i'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Nas ondas da inovação: palestra empolgante sobre o mercado publicitário em transformação'
              label='T.i'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </Card>
  );
}

export default Cards;
