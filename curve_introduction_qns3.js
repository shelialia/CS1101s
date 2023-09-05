import {make_point, translate, draw_connected_full_view_proportional, draw_connected, x_of, y_of} from 'curve';

function s_generator(pt) {
    // your answer here
    return t => t <= 1/2
        // draw the top half of S
        // point input into make_point is the centre of the circle
        // hence, we need to translate it a radius (ie. one unit) up and down
        // for the up circle and down circle respectively
        ? make_point(x_of(pt) + math_cos(3/2 * math_PI * 2 * t),
                     y_of(pt) + 1 + math_sin(3/2 * math_PI * 2 * t))
        // draw the bottom half of S
        : make_point(x_of(pt)
                     - math_cos(3/2 * math_PI * (1 - 2 * (t - 1/2))),
                   y_of(pt) - 1
                 - math_sin(3/2 * math_PI * (1 - 2 * (t - 1/2)))); 
}

// Test
draw_connected_full_view_proportional(200)(s_generator(make_point(0.0, 0.0)));