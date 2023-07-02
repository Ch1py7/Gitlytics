import { Icon } from '@iconify/react'
import { LightModeContext } from 'context'
import { FC, ReactElement, useContext, useState } from 'react'
import { Data } from 'types'
import * as S from './Repositories.styles'

interface RepositoriesProps {
  data: Data
  filter: string
}

export const Repositories: FC<RepositoriesProps> = ({ data, filter }): ReactElement => {
  const { lightMode } = useContext(LightModeContext)
  const [initial, setInitial] = useState<number>(0)
  const [limit, setLimit] = useState<number>(4)
  const filteredRepositories = data.user.repositories.nodes.filter((repo) =>
    repo.languages.edges.some((lang) => lang.node.name.toLowerCase().includes(filter.toLowerCase()))
  )

  const handlePrevious = () => {
    if (initial > 0) {
      setInitial(initial - 4)
      setLimit(limit - 4)
    }
  }

  const handleNext = () => {
    if (limit < filteredRepositories.length) {
      setInitial(initial + 4)
      setLimit(limit + 4)
    }
  }

  return (
    <S.Repositories>
      <S.RepositoriesTitleSec lightMode={lightMode}>REPOSITORIES</S.RepositoriesTitleSec>
      <S.RepositoriesContainer>
        {filteredRepositories.slice(initial, limit).map((repo) => (
          <S.Repository key={repo.name} lightMode={lightMode}>
            <S.RepositoryTitle lightMode={lightMode}>{repo.name}</S.RepositoryTitle>
            <S.RepoAnchor lightMode={lightMode} href={repo.url} target='_blank' rel='noreferrer'>
              <Icon icon='charm:link-external' />
            </S.RepoAnchor>
          </S.Repository>
        ))}
      </S.RepositoriesContainer>
      {filteredRepositories.length > 4 && (
        <S.Buttons>
          <S.Button lightMode={lightMode} onClick={handlePrevious}>
            <Icon icon='akar-icons:arrow-left' height={20} width={20} />
          </S.Button>
          <S.Button
            lightMode={lightMode}
            onClick={handleNext}
            disabled={limit == filteredRepositories.length}
          >
            <Icon icon='akar-icons:arrow-right' height={20} width={20} />
          </S.Button>
        </S.Buttons>
      )}
    </S.Repositories>
  )
}
