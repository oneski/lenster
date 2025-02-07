import NewComment from '@components/Comment/NewComment'
import SinglePost from '@components/Post/SinglePost'
import { Card } from '@components/UI/Card'
import { Modal } from '@components/UI/Modal'
import { PencilAltIcon } from '@heroicons/react/outline'
import { FC } from 'react'
import { usePublicationStore } from 'src/store/publication'

import NewPost from '..'

const NewPostModal: FC = () => {
  const { showNewPostModal, setShowNewPostModal, parentPub, setParentPub } =
    usePublicationStore()

  return (
    <>
      <button
        type="button"
        className="flex items-start"
        onClick={() => {
          setParentPub(null)
          setShowNewPostModal(!showNewPostModal)
        }}
      >
        <PencilAltIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <Modal
        title="New Post"
        icon={<PencilAltIcon className="w-5 h-5 text-brand" />}
        size="md"
        show={showNewPostModal}
        onClose={() => setShowNewPostModal(false)}
      >
        {parentPub ? (
          <>
            <Card className="mx-5 mt-5">
              <SinglePost
                post={parentPub}
                showType={false}
                showActions={false}
              />
            </Card>
            <NewComment
              setShowModal={setShowNewPostModal}
              hideCard
              post={parentPub}
              type="comment"
            />
          </>
        ) : (
          <NewPost setShowModal={setShowNewPostModal} hideCard />
        )}
      </Modal>
    </>
  )
}

export default NewPostModal
