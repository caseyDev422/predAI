import {
	Avatar,
	Box,
	Flex,
	HStack,
	IconButton,
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
	Stack,
	useDisclosure
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons/Close';
import { HamburgerIcon } from '@chakra-ui/icons/Hamburger';
import { Link } from 'react-router-dom';


const Navbar = () => {
	const { open, onOpen, onClose } = useDisclosure();
	const links = [
		{ label: 'Home', link: '/home' },
		{ label: 'Heroes', link: '/heroes' },
		{label: 'Items', link: '/items'},
		{label: 'AI Builder', link: '/ai-builder'},
		{ label: 'About', link: '/about' },
		{ label: 'Contact', link: '/contact' },
	];


	return (
		<>
			<Box className="bg-linear-to-t from-[#1e1629] to-[#28183d] h-[50px]" px={4} marginBottom={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<IconButton
						background={'transparent'}
						display={{ md: 'none' }}
						marginBottom={'16px'}
						size={!open ? 'md' : 'sm'}
						aria-label={'Open Menu'}
						onClick={open ? onClose : onOpen}
					>
						{open ? <CloseIcon /> : <HamburgerIcon />}
					</IconButton>
					<HStack spaceX={8} alignItems={'center'}>
						<Box marginBottom='20px'><img width='40' src='pred-logo-no-bg.png' alt='pred-logo' /></Box>
						<HStack as={'nav'} spaceX={4} display={{ base: 'none', md: 'flex' }}>
							{links.map((link) => (
								<Link to={link.link} key={link.label}>{link.label}</Link>
							))}
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<MenuRoot positioning={{ placement: 'bottom-end' }}>
							<MenuContent position='relative' top='65px' backgroundColor='#28183d'>
								<MenuItem value='option-1' color='white' _hover={{ cursor: 'pointer', backgroundColor: '#0F0616' }}>Option 1</MenuItem>
								<hr />
								<MenuItem value='option-2' color='white' _hover={{ cursor: 'pointer', backgroundColor: '#0F0616' }}>Option 2</MenuItem>
								<hr />
								<MenuItem value='option-3' color='white' _hover={{ cursor: 'pointer', backgroundColor: '#0F0616' }}>Option 3</MenuItem>
							</MenuContent>
							<MenuTrigger asChild marginBottom='16px' _hover={{ cursor: 'pointer' }}>
								<Avatar.Root size='md' variant='solid' shape='rounded'>
									<Avatar.Fallback name='T' />
									<Avatar.Image src='https://bit.ly/sage-adebayo' />
								</Avatar.Root>
							</MenuTrigger>
						</MenuRoot>
					</Flex>
				</Flex>
				{open ? (
					<Box
						className="bg-linear-to-t from-[#1e1629] to-[#28183d] h-[50px]"
						px={4}
						display={{ md: 'none' }}
						position={'relative'}
						height={'fit-content'}
						bottom={4}
						right={4}
						width={'fit-content'}
					>
						<Stack as={'nav'} spaceY={2} padding={2} width={'fit-content'}>
							{links.map((link, i) => (
								<>
									<Link className='pt-[20px]' to={link.link} key={link.label}>{link.label}</Link>
									{i !== links.length - 1 ? <hr className='position-relative' /> : null}
								</>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	)
}

export default Navbar;