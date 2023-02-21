import { html, css, LitElement } from 'lit';

export class StoryHeightRepro extends LitElement {
  render() {
    return html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus
        purus, bibendum nec iaculis non, hendrerit sit amet nibh. Curabitur
        finibus vitae nisi at fermentum. Donec vehicula dui eu eros ornare
        dictum. Etiam gravida et mauris ac tempor. Phasellus finibus mollis
        libero. Fusce molestie nisl quis leo porta, a scelerisque dui iaculis.
        Duis dictum odio a magna commodo accumsan. In hac habitasse platea
        dictumst. Proin volutpat nec ipsum sit amet blandit. Sed purus tellus,
        viverra sed sollicitudin ut, pretium non mauris. Aenean et nunc id augue
        faucibus pulvinar et sed nunc. Aenean non justo eleifend, condimentum
        nibh ut, bibendum odio. Sed feugiat enim vitae neque venenatis, sed
        commodo enim ullamcorper.</p>
    `;
  }
}
