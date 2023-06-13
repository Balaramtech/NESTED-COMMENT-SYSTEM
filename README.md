# NESTED-COMMENT-SYSTEM

This code implements a threaded reply system with nested replies, likes, and delete functionality. Here's a short description of each component:
1. Reply Box: The initial reply box allows users to enter their replies. It includes a textarea for the reply content and a "Post" button to submit the reply.
2. Reply: Each reply in the thread consists of text content, a like counter, a "Like" button to increase the likes, a "Reply" button to add a nested reply, and a "Delete" button to delete the reply and its nested replies.
3. Nested Replies: Clicking the "Reply" button for a particular reply reveals a nested reply box below that reply. Users can enter their replies in the nested reply box, which is displayed in a nested format below the parent reply.
4. Deleting Replies: Clicking the "Delete" button for a reply removes that reply and all its nested replies from the thread, effectively deleting the entire chain of replies under that reply.

The code achieves the functionality using HTML, CSS, and JavaScript. It dynamically creates reply elements, handles posting replies, tracks the number of likes for each reply, allows nested replies, and enables reply deletion.
