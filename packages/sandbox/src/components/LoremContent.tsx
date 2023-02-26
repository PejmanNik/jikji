export const loremContents = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at sem et est mollis vehicula at sed massa. Ut vitae mi lobortis, euismod nisi non, egestas lorem. Duis eu massa enim. Cras tempor ex metus, quis imperdiet velit consequat ac. Quisque fermentum, urna eu suscipit sodales, nunc odio varius mauris, a ornare metus nulla ut sapien. Nullam vitae libero lectus. Donec porta ultrices mattis.',
    'Morbi vel mauris sapien. Donec dictum cursus est a feugiat. Etiam porttitor purus hendrerit odio lacinia, et fermentum sapien sagittis. Quisque aliquam aliquam molestie. Duis felis risus, ultrices sit amet rhoncus nec, scelerisque vel nunc. Sed vel enim sagittis, aliquam sem maximus, iaculis lectus. Morbi ultricies ac orci imperdiet congue.',
    'Mauris posuere venenatis ex at accumsan. Donec rutrum gravida arcu. Curabitur condimentum nunc eget velit sodales, non efficitur elit rhoncus. Integer est libero, placerat non diam ac, dictum vehicula risus. Phasellus vulputate aliquam tempor. Nunc purus leo, fringilla posuere sodales ac, tincidunt sed quam. Vestibulum tortor magna, viverra sed varius quis, viverra quis nulla. Integer vitae massa nec nisi laoreet porttitor. Ut ut nisi leo. Curabitur ultrices consectetur nunc lacinia convallis. Duis efficitur vulputate metus in tristique. Fusce bibendum placerat leo eget volutpat.',
    'Donec at tortor aliquam, volutpat leo ac, molestie arcu. Phasellus ac porta ligula, porttitor condimentum odio. Donec lacus justo, varius non tellus nec, placerat facilisis dolor. Cras at velit rutrum diam imperdiet vulputate at quis magna. Vivamus pulvinar mauris vitae mi viverra, ut efficitur tortor dignissim. In ut fermentum massa, faucibus euismod urna. Nulla consequat mattis ultricies. Suspendisse leo nunc, ullamcorper id justo vel, efficitur eleifend ligula. Nam est mi, venenatis nec elit vel, lacinia vulputate lacus. Nunc felis massa, pellentesque ac ipsum a, semper porta eros. Nam ut mi faucibus, pretium nisl ut, convallis nunc.',
    'Quisque commodo tellus nec libero porta viverra. Aliquam vulputate, est at cursus sollicitudin, orci ante aliquet nulla, eu viverra nunc ante ut eros. Mauris sit amet ornare urna. Vestibulum condimentum finibus odio sed aliquet. Ut auctor malesuada rhoncus. Maecenas ac malesuada velit, ut iaculis sapien. Donec velit massa, elementum in nulla vel, vestibulum luctus orci.',
    'Vestibulum condimentum vehicula luctus. Sed tincidunt massa ligula, blandit vestibulum ligula lacinia vitae. Proin vitae vehicula sapien. Vivamus ullamcorper lacinia nibh ut maximus. Nullam elit nisl, tincidunt eget efficitur dapibus, elementum nec ex. Ut elementum turpis dolor, vel dapibus lorem mattis quis. Pellentesque non malesuada metus. Vivamus dapibus sem at risus dictum ullamcorper. Sed facilisis ornare sodales. Vestibulum id tempor urna. Vivamus bibendum ligula aliquet scelerisque imperdiet. Aenean viverra rutrum quam, ut luctus odio tincidunt sed. Nulla eu rutrum nisl, vel finibus justo. Pellentesque laoreet ullamcorper egestas. Proin dignissim justo velit, eget viverra risus finibus.',
    'Nullam molestie sagittis viverra. Phasellus laoreet ante ante, vitae fringilla felis tempor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate scelerisque leo, vitae posuere mauris venenatis vel. Sed elit eros, aliquet id orci vitae, porta tristique lacus. Donec ipsum mauris, dignissim non ex sit amet, elementum mollis dui. Ut rhoncus pretium fringilla. Nunc molestie quam ut lacinia commodo. Pellentesque tempor scelerisque neque eget venenatis. Ut venenatis convallis dignissim. Aenean non purus vel lectus finibus facilisis a vitae massa. Donec lobortis vel odio vitae malesuada. Quisque tincidunt est tempus justo interdum rhoncus. Pellentesque in nibh dictum, tempus ipsum quis, rutrum urna. Nam a magna at erat lobortis facilisis. Praesent vehicula dui sit amet ante pellentesque, quis ultricies quam suscipit.'
]

function LoremContent({ paragraphs }: { paragraphs: number }) {
    return (
        <>
            {loremContents.slice(0, paragraphs).map((v, i) => <p key={i}>{i}- {v}</p>)}
        </>
    );
}

export default LoremContent;