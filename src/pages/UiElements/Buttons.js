import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Col,
  Row
} from 'reactstrap'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import EmojiButton from '../../components/buttons/Button'

const Buttons = () => {
  return (
    <React.Fragment>
      <Breadcrumbs title={'Ui Elements'} subtitle={'Buttons'} />
      <Row>
        <Col md={6} xs={12} className='my-2'>
          <Card>
            <CardHeader>
              <CardTitle tag={'h5'}>Solid Buttons</CardTitle>
              <CardSubtitle color='secondary'>
                Use "color" prop of Bootstrap button and pass any color
                according to theme.
              </CardSubtitle>
            </CardHeader>
            <CardBody className='d-flex gap-2 flex-wrap'>
              <Button color='primary'>Primary</Button>
              <Button color='secondary'>Secondary</Button>
              <Button color='warning'>Warning</Button>
              <Button color='success'>Success</Button>
              <Button color='info'>Info</Button>
              <Button color='danger'>Danger</Button>
              <Button color='dark'>Dark</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} xs={12} className='my-2'>
          <Card>
            <CardHeader>
              <CardTitle tag={'h5'}>Outlined Buttons</CardTitle>
              <CardSubtitle color='secondary'>
                Use "outline" prop in bootstrap button
              </CardSubtitle>
            </CardHeader>
            <CardBody className='d-flex gap-2 flex-wrap'>
              <Button color='primary' outline>
                Primary
              </Button>
              <Button color='secondary' outline>
                Secondary
              </Button>
              <Button color='warning' outline>
                Warning
              </Button>
              <Button color='success' outline>
                Success
              </Button>
              <Button color='info' outline>
                Info
              </Button>
              <Button color='danger' outline>
                Danger
              </Button>
              <Button color='dark' outline>
                Dark
              </Button>
            </CardBody>
          </Card>
        </Col>
        {/* rounded */}
        <Col md={6} xs={12} className='my-2'>
          <Card>
            <CardHeader>
              <CardTitle tag={'h5'}>Rounded Buttons</CardTitle>
              <CardSubtitle color='secondary'>
                Use ".rounded-pill" class in bootstrap button.
              </CardSubtitle>
            </CardHeader>
            <CardBody className='d-flex gap-2 flex-wrap'>
              <Button color='primary' className='rounded-pill'>
                Primary
              </Button>
              <Button color='secondary' className='rounded-pill'>
                Secondary
              </Button>
              <Button color='warning' className='rounded-pill'>
                Warning
              </Button>
              <Button color='success' className='rounded-pill'>
                Success
              </Button>
              <Button color='info' className='rounded-pill'>
                Info
              </Button>
              <Button color='danger' className='rounded-pill'>
                Danger
              </Button>
              <Button color='dark' className='rounded-pill'>
                Dark
              </Button>
            </CardBody>
          </Card>
        </Col>
        {/* with emoji */}
        <Col md={6} xs={12} className='my-2'>
          <Card>
            <CardHeader>
              <CardTitle tag={'h5'}>Emoji Buttons</CardTitle>
              <CardSubtitle color='secondary'>
                Use `windows + .` to open emoji panel in windows laptop.
              </CardSubtitle>
            </CardHeader>
            <CardBody className='d-flex gap-2 flex-wrap'>
              <Button color='primary'>Primary ✨</Button>
              <Button color='secondary'>Secondary 🎀</Button>
              <Button color='warning'>Warning ⚠</Button>
              <Button color='success'>Success ✅</Button>
              <Button color='info'>Info 📄</Button>
              <Button color='danger'>Danger ☠️</Button>
              <Button color='dark'>Dark ⚫</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Buttons
