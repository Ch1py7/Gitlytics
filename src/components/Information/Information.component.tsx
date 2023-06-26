import { Icon } from '@iconify/react'
import { FC, ReactElement } from 'react'
import * as S from './Information.styles'

export const Information: FC = (): ReactElement => {
  return (
    <S.Information>
      <article>
        <S.InformationTitle>Resources</S.InformationTitle>
        <S.InformationList>
          <li>Docs</li>
          <li>Design</li>
          <li>Guides</li>
          <li>Blog</li>
        </S.InformationList>
      </article>
      <article>
        <S.InformationTitle>Instructions</S.InformationTitle>
        <S.InformationList>
          <li>How to use</li>
          <li>Project Forum</li>
          <li>Community</li>
          <li>FAQ</li>
        </S.InformationList>
      </article>
      <article>
        <S.InformationTitle>About Gitlytics</S.InformationTitle>
        <S.InformationList>
          <li>Home</li>
          <li>Github</li>
          <li>Twitter</li>
          <li>Releases</li>
        </S.InformationList>
      </article>
      <article style={{ width: '10rem' }}>
        <S.InformationTitle>Subscribe to our Newsletter</S.InformationTitle>
        <S.PromotionPhrase>
          The lastest Gitlytics news, releases and resources, sent to your inbox.
        </S.PromotionPhrase>
        <S.PromotionMailContainer>
          <S.PromotionInputCont>
            <Icon icon='material-symbols:mail' height={28} width={28} color='#f3f3f3' />
            <S.PromotionInput placeholder='Enter your email' />
          </S.PromotionInputCont>
          <S.PromotionButton>Notify me</S.PromotionButton>
        </S.PromotionMailContainer>
      </article>
    </S.Information>
  )
}
