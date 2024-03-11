export function useImageUrl(path: string) {
    const assets = import.meta.glob('~/assets/images/*', {
        eager: true,
        import: 'default',
    })

    return assets['/assets/images/' + path] as string
}
