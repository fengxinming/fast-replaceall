export default function(
	str: string, 
	substr: string, 
	replacement: (match: string, offset: number, str: string) => string | any, 
	options?: object
): string
