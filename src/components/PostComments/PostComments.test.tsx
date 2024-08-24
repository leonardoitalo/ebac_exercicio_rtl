import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';
import React from 'react';

const insertComment = (text: string) => {
    const textarea: HTMLTextAreaElement = screen.getByTestId("textarea");
    const button = screen.getByTestId("button");
    
    // Simulate typing in the textarea
    fireEvent.change(textarea, { target: { value: text } });
    expect(textarea.value).toBe(text);

    // Click the button to add the comment
    fireEvent.click(button);

    // Verify that the comment was added correctly
    const comments = screen.getAllByTestId("post");
    expect(comments.some(comment => comment.textContent === text)).toBeTruthy();
};

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it("Should insert two comments in textarea", () => {
        render(<PostComment />);
    
        // First Comment
        insertComment("Primeiro Comentário");
    
        // Second Comment
        insertComment("Segundo Comentário");
      });
});